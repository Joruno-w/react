import {routerRedux} from 'dva/router';
export default {
    namespace: "loginUser",
    state: null,
    reducers: {
        setLoginUser(state,{payload}){
            return payload;
        }
    },
    effects: {
        *login({payload},{put}){
            const {loginId,loginPwd} = payload;
            if (loginId === 'admin' && loginPwd === "123123"){
                yield put({type: "setLoginUser",payload: loginId});
                localStorage.setItem("loginId",loginId);
                yield put(routerRedux.push('/'));
            }else{
                alert("账号或密码错误!");
            }
        },
        *loginOut(action,{put}){
            localStorage.removeItem("loginId");
            yield put({type: "setLoginUser",payload: null});
            yield put(routerRedux.push('/login'));
        }
    },
    subscriptions:{
        asyncLoginUser({dispatch}){
            const loginId = localStorage.getItem("loginId");
            if (loginId){
                dispatch({type: "setLoginUser", payload: loginId});
            }else{
                dispatch(routerRedux.push('/login'));
            }
        }
    }
}