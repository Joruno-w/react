import * as resultActions from '../action/resultAction';
const initialState = {
    data:[],
    total: 0,
    isLoading: false
};

export default function resultReducer(state=initialState,{type,payload}){
    switch (type) {
        case resultActions.SET_LOADING:
            return{
                ...state,
                isLoading: payload
            };
        case resultActions.SET_STUDENTS_AND_TOTAL:
            return{
                ...state,
                ...payload
            };
        default:
            return state;
    }
}