import {takeEvery} from 'redux-saga/effects';
import * as actionTypes from "../action/counter";

function *asyncIncrease() {
    console.log('运行了asyncIncrease');
}

function *asyncDecrease() {
    console.log('运行了asyncDecrease');
}


export default function *(){
    yield takeEvery(actionTypes.ASYNC_INCREASE,asyncIncrease);
    yield takeEvery(actionTypes.ASYNC_DECREASE,asyncDecrease);
    console.log("正在监听asyncIncrease,asyncDecrease");
}