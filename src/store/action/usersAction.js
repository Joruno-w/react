import {getAllStudent} from "../../services/getStudent";
export const ADD_USER = Symbol('add-student');
export const DELETE_USER = Symbol('delete-student');
export const UPDATE_USER = Symbol('update-student');
export const SET_USER = Symbol('set-student');
export const SET_LOADING = Symbol("set-loading");

export const addUserCreator = user=>({
    type: ADD_USER,
    payload: user
});

export const deleteUserCreator = id=>({
    type: DELETE_USER,
    payload: id
});

export const updateUserCreator = (id,userData)=>({
   type: UPDATE_USER,
   payload: {
       ...userData,
       id
   }
});

export const setLoadingCreator = isLoading=>({
   type: SET_LOADING,
   payload: isLoading
});

export const setUserCreator = users=>({
    type: SET_USER,
    payload: users
});

export const fetchUserCreator = ()=>async (dispatch,getState,extra)=>{
      dispatch(setLoadingCreator(true));
      const resp = await getAllStudent();
      dispatch(setUserCreator(resp));
      dispatch(setLoadingCreator(false));
};

