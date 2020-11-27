import {CALL_HISTORY_METHOD,LOCATION_CHANGE} from './actionTypes';

export function createLocationChangeAction(location,action){
    return {
        type: LOCATION_CHANGE,
        payload: {
            location,
            action
        }
    }
}
export function push(...args) {
    return {
        type: CALL_HISTORY_METHOD,
        payload:{
            method: "push",
            args
        }
    }
}

export function replace(...args) {
    return {
        type: CALL_HISTORY_METHOD,
        payload:{
            method: "replace",
            args
        }
    }
}

export function go(...args) {
    return {
        type: CALL_HISTORY_METHOD,
        payload:{
            method: "go",
            args
        }
    }
}

export function goBack(...args) {
    return {
        type: CALL_HISTORY_METHOD,
        payload:{
            method: "goBack",
            args
        }
    }
}

export function goForward(...args) {
    return {
        type: CALL_HISTORY_METHOD,
        payload:{
            method: "goForward",
            args
        }
    }
}