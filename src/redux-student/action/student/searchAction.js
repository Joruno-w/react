export const CHANGE_CONDITION = "CHANGE_CONDITION";

export function change(condition){
    return{
        type: CHANGE_CONDITION,
        payload: condition
    }
}