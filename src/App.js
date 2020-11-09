import React from 'react';
import {BrowserRouter as Router,Route,NavLink} from "react-router-dom";
import Prompt from "./components/Prompt";


function A() {
    return <h1>A</h1>
}

class B extends React.Component{
    state = {
        val: ''
    }
    render() {
        return(<>
            <Prompt when={this.state.val !== ''} message="别乱来，容易造成数据丢失"/>
            <textarea value={this.state.val} onChange={e=>this.setState({val: e.target.value})}></textarea>
        </>)
    }
}

function App(props) {
    return (
        <Router getUserConfirmation={(msg,callback)=>{
            callback(window.confirm(msg));
        }}>
            <div className="nav">
                <NavLink to='/a'>a</NavLink><br/>
                <NavLink to='/b'>b</NavLink>
            </div>
            <Route path='/a' component={A}/>
            <Route path='/b' component={B}/>
        </Router>
    );
}

export default App;