export default function bindActionCreators(actionCreators,dispatch) {
    if (typeof actionCreators === "function"){
        return getAutoDispatchCreator(actionCreators,dispatch);
    }else if (typeof actionCreators === "object"){
        const result = {};
        for (const key in actionCreators){
            if (actionCreators.hasOwnProperty(key)){
                const actionCreator = actionCreators[key];
                if (typeof actionCreator === "function"){
                    result[key] = getAutoDispatchCreator(actionCreator,dispatch);
                }
            }
        }
        return result;
    }else{
        throw new Error("actionCreators must be a function or object");
    }
}


function getAutoDispatchCreator(actionCreator,dispatch) {
    return (...args)=>{
        const action = actionCreator(...args);
        dispatch(action);
    }
}