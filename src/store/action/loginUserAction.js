export const SET_LOGIN_USER = Symbol('set-login-student');

export const loginUserCreator = user=>({
   type: SET_LOGIN_USER,
   payload: user
});