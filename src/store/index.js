import {createStore,bindActionCreators,applyMiddleware} from "../redux";
import reducer from './reducer';
import * as usersAction from './action/usersAction';
import {v4 as uuid} from "uuid";

const logger1 = store=>next=>action=>{
    console.log("旧状态:",store.getState());
    next(action);
    console.log("新状态:",store.getState());
}

const logger2 = store=>next=>action=>{
    console.log("旧状态:",store.getState());
    next(action);
    console.log("新状态:",store.getState());
}


// const store = createStore(reducer,applyMiddleware(logger1,logger2));
const store = applyMiddleware(logger1,logger2)(createStore)(reducer);
store.subscribe(()=>{
    console.log(store.getState());
});
const actionCreatorsMapObject = bindActionCreators(usersAction,store.dispatch);
actionCreatorsMapObject.addUserCreator({
    id: uuid(),
    name: '用户4',
    age: 24
});
