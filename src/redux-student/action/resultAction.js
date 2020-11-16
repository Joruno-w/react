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


export async function fetchStudentsAndTotal(condition) {
    const resp = await getStudentBySearch(condition);
    return setStudentAndTotal(resp.datas,resp.cont);
}