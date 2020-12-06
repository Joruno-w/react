import {getStudentBySearch} from "../services/getStudent";

export default {
    namespace: 'students',
    state: {
        condition: {
            key: '',
            sex: -1,
            page: 1,
            limit: 10
        },
        result: {
            cont: 0,
            datas: []
        }
    },
    reducers: {
        setCondition(state,{payload}){
            return {
                ...state,
                condition: {
                    ...state.condition,
                    ...payload
                }
            }
        },
        setResult(state,{payload}){
            return {
                ...state,
                result: {
                    ...state.result,
                    ...payload
                }
            }
        }
    },
    effects: {
        *fetchStudents(action,{put,select,call}){
            const condition = yield select(state=>state.students.condition);
            const result = yield call(getStudentBySearch,condition);
            yield put({type: "setResult",payload: result});
        }
    },
    subscriptions: {
        initialStudents({dispatch}){
            dispatch({type: 'fetchStudents'});
        }
    }
}