import {createEffect} from "../effectHelper";

export function take(actionType) {
    return createEffect(actionType,{
        actionType
    });
}


export function runTakeEffect(env,effect,next) {
    const actionType = effect.payload.actionType;
    env.channel.take(actionType,action=>next(action));
}