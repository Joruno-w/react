import {createEffect, effectTypes} from "../effectHelper";
import isPromise from "is-promise";

function isPlainObj(obj){
    return typeof obj === "object" && Object.getPrototypeOf(obj) === Object.prototype;
}

export function call(fn, ...args) {
    let context = null,func = null;
    if (Array.isArray(fn)) {
        context = fn[0];
        func = fn[1];
    } else if (isPlainObj(fn)) {
        context = fn.context;
        func = fn.fn;
    }else{
        func = fn;
    }
    return createEffect(effectTypes.CALL, {
        context,
        fn: func,
        args,
    });
}


export function runCallEffect(env, effect, next) {
    const {context,fn,args} = effect.payload;
    const result = fn.call(context,...args);
    if (isPromise(result)){
        result.then(v=>next(v))
            .catch(error=>next(null,error));
    }else{
        next(result);
    }
}