import {createStore,applyMiddleware,thunk} from "../redux";
import reducer from './reducer';
import * as usersAction from './action/usersAction';
import logger from 'redux-logger';

const store = applyMiddleware(logger)(createStore)(reducer);