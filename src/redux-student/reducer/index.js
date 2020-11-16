import {combineReducers} from "redux";
import resultReducer from "./resultReducer";
import searchReducer from "./searchReducer";
export default combineReducers({
    search: searchReducer,
    result: resultReducer
});