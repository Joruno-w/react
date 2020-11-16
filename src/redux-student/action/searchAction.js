export const CHANGE_CONDITION = Symbol("change-condition");

export function change(condition){
    return{
        type: CHANGE_CONDITION,
        payload: condition
    }
}