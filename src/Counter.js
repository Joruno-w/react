import React from 'react';
import {connect} from 'react-redux';
import {increase, decrease, asyncIncrease, asyncDecrease} from "./redux-student/action/counter";

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
        </div>
    );
}


const mapStateToProps = state =>({
    number: state.counter
});

const mapDispatchToProps = dispatch => ({
    onIncrease(){
        dispatch(increase());
    },
    onDecrease(){
        dispatch(decrease())
    },
    onAsyncIncrease(){
        dispatch(asyncIncrease())
    },
    onAsyncDecrease(){
        dispatch(asyncDecrease())
    }
});


export default connect(mapStateToProps,mapDispatchToProps)(Counter);