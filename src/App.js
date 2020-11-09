import React from 'react';
import {Route,Link} from "react-router-dom";
import RouteGuard from "./components/RouteGuard";

function A() {
    return <h1>页面A</h1>
}

function B() {
    return <h1>页面B</h1>
}

function App(props) {
    return (
            <RouteGuard onBeforeChange={(pre,cur,action,commit,unBlock)=>{
                console.log(`页面从${pre.pathname}到${cur.pathname},方式: ${action},允许跳转`);
                commit(true);
                unBlock();
            }} onChange={(pre,cur,action,unListen)=>{
                console.log(`页面从${pre.pathname}到${cur.pathname},方式: ${action},允许跳转`);
                unListen();
            }}>
                <ul>
                    <li><Link to='/a'>页面a</Link></li>
                    <li><Link to='/b' >页面b</Link></li>
                </ul>
                <Route path='/a' component={A}/>
                <Route path='/b' component={B}/>
            </RouteGuard>
    );
}

export default App;