import React, {useState} from 'react';
import {CSSTransition} from 'react-transition-group';
import './App.css';
import 'animate.css';
const duration = 1000;
function MyTransition({visible,children}) {
    return <CSSTransition in={visible} timeout={duration} appear mountOnEnter unmountOnExit classNames={{
        enterActive: 'animate__fadeInRight',
        appearActive: 'animate__fadeInRight',
        exitActive: 'animate__fadeOutLeft',
        exitDone: 'exit-done'
    }}>
        {children}
    </CSSTransition>
}


function Comp1() {
    return <h1 className="title animate__animated">Comp1</h1>
}
function Comp2() {
    return <h1 className="title animate__animated">Comp2</h1>
}

function App() {
    const [visible,setVisible] = useState(true);
    return (
        <div className="container">
            <div>
                <MyTransition visible={visible}>
                    <Comp1/>
                </MyTransition>
                <MyTransition visible={!visible}>
                    <Comp2/>
                </MyTransition>
            </div>
            <button onClick={()=>setVisible(!visible)}>click to toggle</button>
        </div>
    );
}

export default App;