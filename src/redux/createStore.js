import isPlainObj from "./utils/isPlainObj";
import actionTypes from "./utils/actionTypes";

export default function createStore(reducer,defaultState){
    let currentState = defaultState,
        currentReducer = reducer;
    const listeners = [];

    function dispatch(action) {
        if (!isPlainObj(action)){
            throw new TypeError("action must be a plain object");
        }
        if (action.type === undefined) {
            throw new Error("action must have a type property");
        }
        currentState = currentReducer(currentState,action);
        for(const listener of listeners) {
            listener();
        }
    }

    function subscribe(listener) {
        listeners.push(listener);
        const isRemove = !listeners.includes(listener);
        return ()=>{
            if (isRemove){
                return;
            }
            const index = listeners.indexOf(listener);
            listeners.splice(index,1);
        }
    }

    function getState() {
        return currentState;
    }


    dispatch({
        type: actionTypes.INIT()
    });

    return{
        dispatch,
        subscribe,
        getState,
    }
}
