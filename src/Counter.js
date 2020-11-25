import React from 'react';
import {connect} from './dva';

function Counter(props) {
    return (
        <div>
            <h1>{props.number}</h1>
            <div>
                <button onClick={props.onIncrease}>加</button>
                <button onClick={props.onDecrease}>减</button>
                <button onClick={props.onAsyncIncrease}>异步加</button>
                <button onClick={props.onAsyncDecrease}>异步减</button>
            </div>
            <div>
                <input type="number" onChange={e=>{
                    const n = parseInt(e.target.value || 0);
                    props.onAdd(n);
                }}/>
            </div>
        </div>
    );
}


const mapStateToProps = state =>({
    number: state.counter
});

const mapDispatchToProps = dispatch => ({
    onIncrease(){
        dispatch({type: "counter/increase"});
    },
    onDecrease(){
        dispatch({type: "counter/decrease"});
    },
    onAsyncIncrease(){
        dispatch({type: "counter/asyncIncrease"});
    },
    onAsyncDecrease(){
        dispatch({type: "counter/asyncDecrease"});
    },
    onAdd(n){
        dispatch({type: "counter/add",payload: n});
    }
});


export default connect(mapStateToProps,mapDispatchToProps)(Counter);