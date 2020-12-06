import {combineReducers} from "redux";
import resultReducer from "./student/resultReducer";
import searchReducer from "./student/searchReducer";
import counterReducer from './counter';
import {connectRouter} from "connected-react-router";
import history from "../history";

export default combineReducers({
    search: searchReducer,
    result: resultReducer,
    counter: counterReducer,
    router: connectRouter(history)
});