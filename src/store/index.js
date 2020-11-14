import {createStore} from "../redux";
import reducer from './reducer';
import * as usersAction from './action/usersAction';
import * as loginUserAction from './action/loginUserAction';
import {v4 as uuid} from "uuid";

const store = createStore(reducer);
store.subscribe(()=>{
    console.log(store.getState());
});
store.dispatch(usersAction.addUserCreator({
    id: uuid(),
    name: '用户3',
    age: 23
}));
