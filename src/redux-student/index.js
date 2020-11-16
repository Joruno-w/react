import {createStore,applyMiddleware} from "redux";
import reducer from './reducer';
import logger from 'redux-logger';
// import thunk from 'redux-thunk';
import promiseMiddleware  from 'redux-promise';
import {fetchStudentsAndTotal} from "./action/resultAction";
const store = createStore(reducer,applyMiddleware(promiseMiddleware,logger));
store.dispatch(fetchStudentsAndTotal());
export default store;