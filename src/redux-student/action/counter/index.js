import {createActions} from 'redux-actions';
export const INCREASE = "INCREASE"
export const DECREASE = "DECREASE"
export const ASYNC_DECREASE = "ASYNC_DECREASE"
export const ASYNC_INCREASE = "ASYNC_INCREASE";
export const ADD = "ADD";

// function createAction(type,payloadCreator,metaCreator){
//     return function (...args) {
//         const result = {
//             type
//         };
//         if (typeof payloadCreator === "function"){
//             result.payload = payloadCreator(...args);
//         }
//         if (typeof metaCreator === "function"){
//             result.meta = metaCreator();
//         }
//         return result;
//     }
// }


// function createActions(actionMap){
//     const result = {};
//     for (const prop in actionMap) {
//         if (actionMap.hasOwnProperty(prop)){
//             const propName = toSmallCamel(prop);
//             const payloadCreator = actionMap[prop];
//             const actionCreator = (...args)=>{
//                 if (typeof payloadCreator === "function"){
//                     return {
//                         type: prop,
//                         payload: payloadCreator(...args)
//                     }
//                 }else{
//                     return{
//                         type: prop,
//                     }
//                 }
//             }
//             actionCreator.toString = ()=>prop;
//             result[propName] = actionCreator;
//         }
//     }
//     return result;
// }


// function toSmallCamel(str){
//     return str.split('_').map((s,i)=>{
//         s = s.toLowerCase();
//         if (i !== 0 && s.length > 0){
//             s = s[0].toUpperCase() + s.substr(1);
//         }
//         return s;
//     }).join("");
// }



export const {increase,decrease,asyncIncrease,asyncDecrease,add} = createActions({
    INCREASE: null,
    DECREASE: null,
    ASYNC_INCREASE: null,
    ASYNC_DECREASE: null,
    ADD: number=>number
});




