import * as actionTypes from "../action/student/resultAction";
import {put,call,select,takeEvery,cps} from 'redux-saga/effects';
import {getStudentBySearch} from "../../services/getStudent";

function mockStudents(condition,callback){
    console.log("mockStudent",condition);
    setTimeout(()=> {
        if (Math.random()> .5){
            callback(null,{
                cont: 78,
                data: [
                    {id:1,name:'abc'},
                    {id:2,name:'bcd'},
                ]
            })
        }else{
            callback(new Error("error"),null);
        }
    },1000);
}

function* fetchStudent(){
    yield put(actionTypes.setLoading(true));
    const condition = yield select(state => state.search);
    const result = yield cps(mockStudents,condition);
    console.log(result);
    const resp = yield call(getStudentBySearch,condition);
    yield put(actionTypes.setStudentAndTotal(resp.datas,resp.cont));
    yield put(actionTypes.setLoading(false));
}

export default function *(){
    yield takeEvery(actionTypes.FETCH_STUDENT_AND_TOTAL,fetchStudent);
    console.log("正在监听fetchStudents");
}