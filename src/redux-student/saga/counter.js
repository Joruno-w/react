import {takeEvery,delay,put} from 'redux-saga/effects';
import * as actionTypes from "../action/counter";

function *asyncIncrease() {
    yield delay(1000);
    yield put(actionTypes.increase());
}

function *asyncDecrease() {
    yield delay(1000);
    yield put(actionTypes.decrease());
}


export default function *(){
    yield takeEvery(actionTypes.ASYNC_INCREASE,asyncIncrease);
    yield takeEvery(actionTypes.ASYNC_DECREASE,asyncDecrease);
}