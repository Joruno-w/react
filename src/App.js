import React from 'react';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Login from "./components/Login";
import Admin from "./components/Admin";

function App(props) {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/" component={Admin} />
            </Switch>
        </Router>
    );
}

export default App;