import {createStore,bindActionCreators} from "../redux";
import reducer from './reducer';
import * as usersAction from './action/usersAction';
import {v4 as uuid} from "uuid";

const store = createStore(reducer);
store.subscribe(()=>{
    console.log(store.getState());
});
const actionCreatorsMapObject = bindActionCreators(usersAction,store.dispatch);
actionCreatorsMapObject.addUserCreator({
    id: uuid(),
    name: '用户4',
    age: 24
});
