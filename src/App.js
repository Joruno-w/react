import React from 'react';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";

function User({match}) {
    console.log(match);
    return <div>
        <h1>User组件</h1>
        <div>
            <Link to={`${match.url}/info`} style={{marginRight: 10}}>info</Link>
            <Link to={`${match.url}/pay`}>pay</Link>
        </div>
        <div style={{
            width: 400,
            height: 400,
            margin: '50px auto',
            background: 'lightblue',
            border: '1px solid'
        }}>
            <Route path={`${match.path}/info`} component={UserInfo} />
            <Route path={`${match.path}/pay`} component={UserPay}/>
        </div>
    </div>
}

function UserInfo() {
    return <h1>用户信息</h1>
}

function UserPay() {
    return <h1>用户充值</h1>
}

function App() {
    return (
        <Router>
            <Route path='/user' component={User}/>
        </Router>
    );
}

export default App;