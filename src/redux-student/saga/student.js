import * as actionTypes from "../action/student/resultAction";
import {put,call,select,takeEvery} from 'redux-saga/effects';
import {getStudentBySearch} from "../../services/getStudent";

function* fetchStudent(){
    yield put(actionTypes.setLoading(true));
    const condition = yield select(state => state.search);
    const resp = yield call(getStudentBySearch,condition);
    yield put(actionTypes.setStudentAndTotal(resp.datas,resp.cont));
    yield put(actionTypes.setLoading(false));
}

export default function *(){
    yield takeEvery(actionTypes.FETCH_STUDENT_AND_TOTAL,fetchStudent);
}