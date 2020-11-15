import {combineReducers} from "../../redux";
import loginUser from './loginUser';
import users from './users';
export default combineReducers({
    loginUser,
    users
});