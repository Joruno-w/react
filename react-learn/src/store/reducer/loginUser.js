import * as loginUserAction from '../action/loginUserAction';
const initialState = null;
export default (state=initialState,{type,payload})=>{
    switch (type) {
        case loginUserAction.SET_LOGIN_USER:
            return payload;
        default:
            return state;
    }
}