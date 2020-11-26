export const SET_STUDENTS_AND_TOTAL = "SET_STUDENTS_AND_TOTAL";
export const SET_LOADING = "SET_LOADING";
export const FETCH_STUDENT_AND_TOTAL = "FETCH_STUDENT_AND_TOTAL";

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