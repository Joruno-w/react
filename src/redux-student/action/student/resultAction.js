export const SET_STUDENTS_AND_TOTAL = Symbol('set-students-and-total');
export const SET_LOADING = Symbol("set-loading");
export const FETCH_STUDENT_AND_TOTAL = Symbol("fetch-student-and-total");

export function setStudentAndTotal(data,total){
    return{
        type: SET_STUDENTS_AND_TOTAL,
        payload: {
            data,
            total
        }
    }
}

export function setLoading(isLoading) {
    return {
        type: SET_LOADING,
        payload: isLoading
    }
}


export function fetchStudentsAndTotal(){
    return{
        type:FETCH_STUDENT_AND_TOTAL,
    }
}