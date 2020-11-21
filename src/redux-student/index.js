import {createStore,applyMiddleware} from "redux";
import reducer from './reducer';
import logger from 'redux-logger';
import * as actionTypes from "./action/counter";
import createSagaMiddleware from 'redux-saga';
import sagaTask from './saga';
import {fetchStudentsAndTotal} from "./action/student/resultAction";
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer,applyMiddleware(sagaMiddleware,logger));
sagaMiddleware.run(sagaTask);
window.increase = ()=>{
    store.dispatch(actionTypes.increase());
}
window.decrease = ()=>{
    store.dispatch(actionTypes.decrease());
}
window.asyncDecrease = ()=>{
    store.dispatch(actionTypes.asyncDecrease());
}
window.asyncIncrease = ()=>{
    store.dispatch(actionTypes.asyncIncrease());
}
window.fetchStudent = ()=>{
    store.dispatch(fetchStudentsAndTotal());
}

export default store;