import compose from './compose';
export default (...middlewares)=>createStore=>(reducer,defaultState)=>{
    const store = createStore(reducer,defaultState);
    const simpleStore = {
        getState: store.getState,
        dispatch: store.dispatch
    };
    let dispatch = ()=>new Error("don't invoke dispatch now");
    const dispatchCreators = middlewares.map(mid=>mid(simpleStore));
    dispatch = compose(...dispatchCreators)(store.dispatch);
    return{
        ...store,
        dispatch
    }
}


