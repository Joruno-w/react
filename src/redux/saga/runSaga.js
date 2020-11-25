import Task from "./Task";
import isGenerator from 'is-generator';
import {isEffect} from "./effectHelper";
import isPromise from "is-promise";
import runEffect from "./runEffect";

export default function (env,generatorFunc,...args) {
    const iterator = generatorFunc(...args);
    if (isGenerator(iterator)) {
        return proc(env,iterator);
    }else{
        console.log("一个普通函数");
    }
}

export function proc(env,iterator){
    const obj = {
        callback: null
    }
    next();
    function next(nextValue,error,isOver){
        let result;
        if (error){
            result = iterator.throw(error);
        }else if (isOver){
            obj.callback && obj.callback();
            result = iterator.return();
        }else{
            result = iterator.next(nextValue);
        }

        const {value,done} = result;
        if (done){
            obj.callback && obj.callback();
            return;
        }
        if (isEffect(value)){
            runEffect(env,value,next);
        }else{
            if (isPromise(value)){
                value.then(r=>next(r))
                    .catch(error=>next(null,error));
            }else{
                next(value);
            }
        }
    }
    return new Task(next,obj);
}