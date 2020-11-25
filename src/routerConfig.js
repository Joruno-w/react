import React from "react";
import Counter from "./Counter";
import {routerRedux,Route, NavLink,Switch} from 'dva/router';

function Home() {
    return <h1>首页</h1>
}

function RouterConfig({history}) {
    return (
        <routerRedux.ConnectedRouter history={history}>
            <>
                <ul>
                    <li>
                        <NavLink to="/">首页</NavLink>
                    </li>
                    <li>
                        <NavLink to="/counter">counter</NavLink>
                    </li>
                </ul>
                <Switch>
                    <Route path="/counter" component={Counter}/>
                    <Route path="/" component={Home}/>
                </Switch>
            </>
        </routerRedux.ConnectedRouter>
    );
}

export default RouterConfig;