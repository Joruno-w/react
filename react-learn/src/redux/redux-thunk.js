function createThunkMiddleware(extra){
    return store=>next=>action=>{
        if (typeof action === "function"){
            const {dispatch,getState} = store;
            return action(dispatch,getState,extra);
        }else{
            return next(action);
        }
    }
}
const thunk  = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;
export default thunk;