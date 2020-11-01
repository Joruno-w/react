import React,{useState} from 'react';

function useReducer(reducer,initialState,func){
    const [state,setState] = useState(func? func(initialState) : initialState);
    function dispatch(action){
        const newState = reducer(state,action);
        setState(newState);
    }
    return [state,dispatch];
}


function reducer(state, action) {
    switch (action.type) {
        case 'increase':
            return state + 1;
        case 'decrease':
            return state - 1;
        default:
            return state;
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, 10, (arg)=>{
        console.log(arg);
        return 100;
    });
    return (
        <div>
            <button onClick={()=>{
                dispatch({type: 'decrease'});
            }}>-</button>
            <span>{state}</span>
            <button onClick={()=>{
                dispatch({type: 'increase'});
            }}>+</button>
        </div>
    );
}

export default App;
