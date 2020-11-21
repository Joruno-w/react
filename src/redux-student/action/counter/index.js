export const INCREASE = Symbol('increase');
export const DECREASE = Symbol("decrease");
export const ASYNC_DECREASE = Symbol("async-decrease");
export const ASYNC_INCREASE = Symbol("async-increase");

export function increase() {
    return{
        type: INCREASE
    }
}

export function decrease(){
    return{
        type: DECREASE
    }
}
export function asyncIncrease(){
    return{
        type: ASYNC_INCREASE
    }
}
export function asyncDecrease(){
    return{
        type: ASYNC_DECREASE
    }
}