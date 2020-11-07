import React from 'react';
import {BrowserRouter as Router, Route, NavLink, Redirect,Switch} from "react-router-dom";
import './App.css';
function A() {
    return <h1>组件A</h1>
}

function B() {
    return <h1>组件B</h1>
}

function NavBar() {
    return(
        <div>
            <NavLink to='/a' style={{marginRight: 10}} innerRef={node=>{
                console.log(node);
            }} activeClassName="selected" activeStyle={{
                background: '#ccc'
            }}>去A页</NavLink>
            <NavLink to='/b' style={{marginRight: 10}}>去B页</NavLink>
            <NavLink to='/abc'>去其他页</NavLink>
        </div>
    )
}

function App(props) {
    return (
        <Router>
            <NavBar/>
            <Switch>
                <Route path='/a' component={A}/>
                <Route path='/b' component={B}/>
                <Redirect to='/a' from="/abc" />
            </Switch>
        </Router>
    );
}

export default App;