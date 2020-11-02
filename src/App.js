import React, {useState} from 'react';
import {SwitchTransition,CSSTransition} from 'react-transition-group';
import './App.css';
import 'animate.css';
const duration = 1000;
function App() {
    const [visible,setVisible] = useState(true);
    return (
        <div className="container">
            <SwitchTransition>
                <CSSTransition key={visible} timeout={duration} appear mountOnEnter unmountOnExit
                               classNames={{
                                   enter: 'animate__bounceIn',
                                   exit: 'animate__bounceOut',
                                   appear: 'animate__bounceIn',
                                   exitDone: 'exit-done'
                               }}
                >
                    <h1 className="animate__animated">{visible?'title1':'title2'}</h1>
                </CSSTransition>
            </SwitchTransition>
            <button onClick={()=>setVisible(!visible)}>click to toggle</button>
        </div>
    );
}

export default App;