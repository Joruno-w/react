import React from 'react';
import {BrowserRouter as Router, Route, Switch, withRouter,Link,NavLink} from "./react-router-dom";

function Page1() {
    return <h1>Page1</h1>
}

function Page2() {
    return <h1>Page2</h1>
}

function App(props) {
    return <Router>
        <div>
            <NavLink to='/page1'>page1</NavLink>
            <NavLink to='/page2'>page2</NavLink>
        </div>
        <Switch>
            <Route path='/page1' component={Page1}/>
            <Route path='/page2' component={Page2}/>
        </Switch>
    </Router>
}

export default App;