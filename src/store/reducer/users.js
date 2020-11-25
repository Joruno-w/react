import * as usersAction from '../action/usersAction';
const initialState = {
    isLoading: false,
    data: []
};
export default (state=initialState,{type,payload})=>{
    switch (type) {
        case usersAction.ADD_USER:
            return{
                ...state,
                data: payload
            };
        case usersAction.DELETE_USER:
            return {
                ...state,
                data: state.filter(it=>it.id !== payload.id)
            };
        case usersAction.UPDATE_USER:
            return{
                ...state,
                data: state.map(it=>it.id === payload.id ? {...it,...payload} : it)
            };
        case usersAction.SET_USER:
            return {
                ...state,
                data: payload
            };
        case usersAction.SET_LOADING:
            return {
                ...state,
                isLoading: payload
            };
        default:
            return state;
    }
};