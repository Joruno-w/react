import {createEffect, effectTypes} from "../effectHelper";
import runSaga from "../runSaga";

export function fork(generatorFunc,...args) {
    return createEffect(effectTypes.FORK,{
        fn: generatorFunc,
        args
    });
}

export function runForkEffect(env,effect,next){
    const {fn,args} = effect.payload;
    const task = runSaga(env,fn,...args);
    next(task);
}