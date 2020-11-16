import {createStore,bindActionCreators,applyMiddleware} from "../redux";
import reducer from './reducer';
import * as usersAction from './action/usersAction';
import {v4 as uuid} from "uuid";
import {createLogger} from 'redux-logger';

const logger = createLogger({
    duration: true,
    collapsed: true,
    timestamp: false,
    level: "log",
});

// const store = createStore(reducer,applyMiddleware(logger));
const store = applyMiddleware(logger)(createStore)(reducer);
const actionCreatorsMapObject = bindActionCreators(usersAction,store.dispatch);
actionCreatorsMapObject.addUserCreator({
    id: uuid(),
    name: '用户4',
    age: 24
});
