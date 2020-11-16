import {createStore,applyMiddleware,thunk} from "../redux";
import reducer from './reducer';
import * as usersAction from './action/usersAction';
import logger from 'redux-logger';

// const store = createStore(reducer,applyMiddleware(logger));
const store = applyMiddleware(thunk,logger)(createStore)(reducer);
store.dispatch(usersAction.fetchUserCreator());