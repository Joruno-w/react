import isPlainObj from "./utils/isPlainObj";
import actionTypes from "./utils/actionTypes";
function validator(reducers) {
    if (typeof reducers !== "object"){
        throw new TypeError("reducers must be a object");
    }
    if (!isPlainObj(reducers)){
        throw new TypeError("reducers must be a plain object");
    }
    for (const key in reducers){
        if (reducers.hasOwnProperty(key)){
            const reducer = reducers[key];
            let state = reducer(undefined,{
                type: actionTypes.INIT()
            });
            if (state === undefined){
                throw new Error("reducer not return undefined");
            }
            state = reducer(undefined,{
                type: actionTypes.UNKNOWN()
            });
            if (state === undefined){
                throw new Error("reducer not return undefined");
            }
        }
    }
}

export default reducers=>(state={},action)=>{
    validator(reducers);
    const newState = {};
    for (const key in reducers){
        if (reducers.hasOwnProperty(key)){
            const reducer = reducers[key];
            newState[key] = reducer(state[key],action);
        }
    }
    return newState;
};