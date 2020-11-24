import React from 'react';
import store from "./redux-student";
import {Provider} from "react-redux";
import {Route,Switch} from 'react-router-dom';
import Login from "./components/Login";
import Admin from "./components/Admin";
import {ConnectedRouter} from 'connected-react-router';
import history from "./redux-student/history";

function App() {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/" component={Admin} />
                </Switch>
            </ConnectedRouter>
        </Provider>
    );
}

export default App;