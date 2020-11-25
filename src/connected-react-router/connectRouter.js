import {LOCATION_CHANGE} from './actionTypes';
export default function (history){
    const initialState = {
        action: history.action,
        location: history.location
    };
    return (state = initialState,{type,payload})=>{
        switch (type) {
            case LOCATION_CHANGE:
                return payload;
            default:
                return state;
        }
    }
}