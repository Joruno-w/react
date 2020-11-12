import React from 'react';
import {BrowserRouter as Router, Route, Switch, withRouter} from "./react-router-dom";

function Comp(props) {
    return <div>
        <button onClick={() => {
            props.history.push('/page2');
        }}>page2
        </button>
    </div>
}

const CompWrapper = withRouter(Comp);

function Page1() {
    return <div>
        <h1>Page1</h1>
        <CompWrapper/>
    </div>
}

function Page2() {
    return <h1>Page2</h1>
}

function App(props) {
    return <Router>
        <Switch>
            <Route path='/page1' component={Page1}/>
            <Route path='/page2' component={Page2}/>
        </Switch>
    </Router>
}

export default App;