import React from "react";
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import createSagaMiddleware from './saga';
import * as sagaEffects from './saga';
import {connectRouter,routerMiddleware} from 'connected-react-router';
import {createHashHistory} from "history";

export default function (opt={}){
    const app = {
        model,
        _models: [],
        router,
        _router: null,
        start,
    };
    const option = getOption();
    return app;

    function getOption(){
        const defaultOption = {
            history: opt.history || createHashHistory(),
            initialState: opt.initialState || {},
            onError: opt.onError ||(()=>{}),
            onStateChange: opt.onStateChange || (()=>{}),
            onReducer: opt.onReducer || (reducer=>(state,action)=>reducer(state,action)),
            onEffect: opt.onEffect,
            extraReducers: opt.extraReducers || {},
            extraEnhancers: opt.extraEnhancers || []
        };
        if (opt.onAction){
            if (Array.isArray(opt.onAction)){
                defaultOption.onAction = opt.onAction;
            }else{
                defaultOption.onAction = [opt.onAction];
            }
        }else{
            defaultOption.onAction = [];
        }
        return defaultOption;
    }

    function model(modelObj){
        app._models.push(modelObj);
    }

    function router(routerFunc){
        app._router = routerFunc;
    }

    function start(selector) {
        const store = getStore();
        runSubscription(store.dispatch);
        render(selector,store);
    }


    function getNewAction(action,model) {
        let newAction = action;
        if (!action.type.includes('/')){
            newAction = {
                ...action,
                type: `${model.namespace}/${action.type}`
            }
        }
        return newAction;
    }

    function runSubscription(dispatch) {
        for (const model of app._models) {
            const newDispatch = action=>dispatch(getNewAction(action,model));
            if (model.subscriptions){
                for (const prop in model.subscriptions) {
                    const func = model.subscriptions[prop];
                    func({
                        dispatch: newDispatch,
                        history: option.history
                    });
                }
            }
        }
    }

    function getMiddleware() {
        const sagaMid = createSagaMiddleware();
        getMiddleware.runSaga = function (store) {
            const arr = [];
            for (const model of app._models) {
                const put = action=>sagaEffects.put(getNewAction(action,model));
                if (model.effects){
                    for (const prop in model.effects){
                        arr.push({
                            type: `${model.namespace}/${prop}`,
                            generateFunc:  model.effects[prop],
                            put
                        });
                    }
                }
            }
            sagaMid.run(function *() {
                for (const item of arr) {
                    let func = function *(action){
                        yield item.generateFunc(action,{...sagaEffects,put: item.put});
                    }
                    if (option.onEffect){
                        const oldEffect = func;
                        func = option.onEffect(oldEffect,sagaEffects,model,item.type);
                    }
                    yield sagaEffects.takeEvery(item.type,func);
                }
            });
        }
        const mids = [routerMiddleware(option.history),...option.onAction,sagaMid];
        return composeWithDevTools(applyMiddleware(...mids));
    }

    function getExtraReducers() {
        return {
            routing: connectRouter(option.history),
            ["@@dva"](state=0,action){
                return state;
            },
            ...option.extraReducers
        }
    }

    function getStore() {
        let rootReducerObj = {};
        for (const model of app._models) {
            const obj = getReducer(model);
            rootReducerObj[obj.name] = obj.reducer;
        }
        rootReducerObj = {...rootReducerObj,...getExtraReducers()}
        let rootReducer = combineReducers(rootReducerObj);
        const oldReducer1 = rootReducer;
        rootReducer = function (state, action) {
            const newState = oldReducer1(state,action);
            option.onStateChange(newState);
            return newState;
        }
        const oldReducer2 = rootReducer;
        rootReducer = option.onReducer(oldReducer2);
        const enhancedCreateStore = option.extraEnhancers.reduce((a,b)=>b(a),createStore);
        const store = enhancedCreateStore(rootReducer,option.initialState,getMiddleware());
        getMiddleware.runSaga(store);
        window.store = store;
        return store;
    }

    function getReducer(model) {
        const actionTypes = [];
        if (model.reducers){
            for (const prop in model.reducers) {
                actionTypes.push({
                    type: `${model.namespace}/${prop}`,
                    func: model.reducers[prop]
                });
            }
        }
        const reducerObj = {
            name: model.namespace,
            reducer:(state=model.state,action)=>{
                const result = actionTypes.find(t=>t.type === action.type);
                if (result){
                    return result.func(state,action);
                }else{
                    return state;
                }
            }
        };
        return reducerObj;
    }

    function render(selector,store){
        const routerConfig = app._router({
            history: option.history,
            app
        });
        const root = <Provider store={store}>
            {routerConfig}
        </Provider>
        ReactDOM.render(root,document.querySelector(selector));
    }
}