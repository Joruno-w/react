import {isPlainObject,isString} from "lodash";
import isPromise from 'is-promise';

function isFSA(action){
    return isPlainObject(action) && isString(action.type) && Object.keys(action).every(ac=>["type","payload","error","meta"].includes(ac));
}

export default ({dispatch})=>next=>action=>{
    if (!isFSA(action)){
        return isPromise(action) ? action.then(dispatch) : next(action);
    }
    return isPromise(action.payload) ?
        action.payload
            .then(payload=>({...action,payload}))
            .catch(error=>({...action,payload: error,error: true}))
        : next(action);
}