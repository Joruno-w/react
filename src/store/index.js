import {createStore,applyMiddleware} from "../redux";
import reducer from './reducer';
import logger from 'redux-logger';
import createSagaMiddleware from '../redux/saga';
import sagaTask from './saga';
const sagaMiddleware = createSagaMiddleware();

const store = applyMiddleware(sagaMiddleware,logger)(createStore)(reducer);

sagaMiddleware.run(sagaTask);

export default store;