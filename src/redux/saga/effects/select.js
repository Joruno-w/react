import {createEffect, effectTypes} from "../effectHelper";

export function select(func) {
    return createEffect(effectTypes.SELECT,{
        fn: func
    });
}


export function runSelectEffect(env,effect,next) {
    let state = env.store.getState();
    if (effect.payload.fn){
        state = effect.payload.fn(state);
    }
    next(state);
}