import {CALL_HISTORY_METHOD} from './actionTypes';
export default history=>store=>next=>action=>{
    if (action.type === CALL_HISTORY_METHOD){
        const {method,args} = action;
        history[method](...args);
    }else{
        next(action);
    }
}