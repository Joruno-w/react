export const ADD_USER = Symbol('add-user');
export const DELETE_USER = Symbol('delete-user');
export const UPDATE_USER = Symbol('update-user');

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

