import * as actionTypes from '../../action/counter';
export default function (state=10,{type}){
    switch (type){
        case actionTypes.INCREASE:
            return state + 1;
        case actionTypes.DECREASE:
            return state - 1;
        default:
            return state;
    }
}