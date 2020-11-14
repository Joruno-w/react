import * as usersAction from '../action/usersAction';
import {v4 as uuid} from 'uuid';
const initialState = [
    {id: uuid(),name:'用户1',age:11},
    {id: uuid(),name:'用户2',age:12},
];
export default (state=initialState,{type,payload})=>{
    switch (type) {
        case usersAction.ADD_USER:
            return [...state,payload];
        case usersAction.DELETE_USER:
            return state.filter(it=>it.id !== payload.id);
        case usersAction.UPDATE_USER:
            return state.map(it=>it.id === payload.id ? payload : it);
        default:
            return state;
    }
};