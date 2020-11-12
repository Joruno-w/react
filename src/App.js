import React from 'react';
import {BrowserRouter as Router,Route} from "./react-router-dom";

function A() {
    return <h1>页面A</h1>
}

function B() {
    return <h1>页面B</h1>
}

function Change({history}) {
    return <div>
        <button onClick={()=>{
            history.push('/a');
        }}>去A页</button>
        <button onClick={()=>{
            history.push('/b');
        }}>去B页</button>
    </div>
}

function App(props) {
    return <Router>
        <Route path='/a' component={A}/>
        <Route path='/b' component={B}/>
        <Route component={Change}/>
    </Router>
}

export default App;