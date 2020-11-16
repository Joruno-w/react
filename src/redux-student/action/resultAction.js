import {getStudentBySearch} from "../../services/getStudent";

export const SET_STUDENTS_AND_TOTAL = Symbol('set-students-and-total');
export const SET_LOADING = Symbol("set-loading");

export function setStudentAndTotal(data,total) {
    return{
        type: SET_STUDENTS_AND_TOTAL,
        payload: {
            data,
            total
        }
    }
}

export function setLoading(isLoading) {
    return{
        type: SET_LOADING,
        payload: isLoading
    }
}


export function fetchStudentsAndTotal() {
    return async (dispatch,getState,extra)=>{
        const condition = getState().search;
        dispatch(setLoading(true));
        const resp = await getStudentBySearch(condition);
        dispatch(setStudentAndTotal(resp.datas,resp.cont));
        dispatch(setLoading(false));
    }
}