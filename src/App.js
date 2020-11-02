import React, {useEffect, useState} from 'react';
import {Transition} from 'react-transition-group';
// import './App.css';
// function Transition(props) {
//     const [state,setState] = useState('exited');
//     useEffect(()=>{
//         if (props.in){
//             setState("entering");
//             setTimeout(()=>{
//                 setState("entered");
//             },props.timeout);
//         }else{
//             setState('exiting');
//             setTimeout(()=>{
//                 setState("exited");
//             },props.timeout);
//         }
//     },[props.in,props.timeout]);
//     return props.children(state);
// }
const duration = 2000;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
};

const transitionStyles = {
    entering: { opacity: 1 },
    entered:  { opacity: 1 },
    exiting:  { opacity: 0 },
    exited:  { opacity: 0 },
};
function App() {
    const [inProp,setInProp] = useState(false);
    return (
        <>
            <Transition in={inProp} timeout={duration} appear mountOnEnter unmountOnExit>
                {state=>{
                    console.log(state);
                    return <div style={{
                        ...defaultStyle,
                        ...transitionStyles[state]
                    }} >
                        React
                    </div>
                }}
            </Transition>
            <button onClick={()=>setInProp(!inProp)}>click to toggle</button>
        </>
    );
}

export default App;