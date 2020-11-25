import {createStore,applyMiddleware} from "redux";
import reducer from './reducer';
import logger from 'redux-logger';
import * as actionTypes from "./action/counter";
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';
import sagaTask from './saga';
import {routerMiddleware} from "connected-react-router";
import history from "./history";

const routerMid = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer,composeWithDevTools(applyMiddleware(routerMid,sagaMiddleware,logger)));
sagaMiddleware.run(sagaTask);

export default store;