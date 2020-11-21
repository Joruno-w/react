import {combineReducers} from "redux";
import resultReducer from "./student/resultReducer";
import searchReducer from "./student/searchReducer";
import counterReducer from './counter';
export default combineReducers({
    search: searchReducer,
    result: resultReducer,
    counter: counterReducer
});