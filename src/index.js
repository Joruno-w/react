import dva from 'dva';
import Counter from "./models/Counter";
import routerConfig from "./routerConfig";
import {createBrowserHistory} from "history";

const logger = store => next => action => {
    console.log("旧状态: ", store.getState());
    next(action);
    console.log("新状态: ", store.getState());
}

const app = dva({
    history: createBrowserHistory(),
    initialState: {
        counter: 0
    },
    onError: (e, dispatch) => {
        console.log(e, dispatch);
    },
    onAction: logger,
    onEffect: (oldEffects, sagaEffects, model, actionType) => {
        return function* (...args) {
            console.log("即将执行副作用函数")
            yield oldEffects(...args);
            console.log("副作用函数执行完毕")
        };
    },
    onReducer: reducer => (state, action) => {
        console.log("封装reducer");
        return reducer(state, action);
    },
    onStateChange: state => {
        console.log(state.counter);
    },
    extraEnhancers: [
        function (createStore) {
            return function (...args){
                console.log("1.即将创建仓库!");
                return createStore(...args);
            }
        },
        function (createStore) {
            return function (...args){
                console.log("2.即将创建仓库!");
                return createStore(...args);
            }
        }
    ],
    extraReducers: {
        abc(state=123,action){
            return state;
        },
        bcd(state=456,action){
            return state;
        }
    }
});

app.model(Counter);
app.router(routerConfig);
app.start("#root");
