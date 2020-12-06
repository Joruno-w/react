import React, {Component} from 'react';
import Router from "../react-router/Router";
import {createBrowserHistory} from "history";
class BrowserRouter extends Component {
    history = createBrowserHistory(this.props);
    render() {
        return <Router history={this.history}>
            {this.props.children}
        </Router>
    }
}

export default BrowserRouter;