import React from 'react';
import {BrowserRouter as Router,Route,Switch,Link} from "react-router-dom";
import logininfo from "./utils/logininfo";
import ProtectedRoute from "./components/ProtectedRoute";
function Home() {
    return <h1>首页</h1>
}

function Login(props) {
    return <div>
        <h1>登录页</h1>
        <button onClick={()=>{
            logininfo.login();
            if (props.location.state){
                props.history.push(props.location.state);
            }else{
                props.history.push('/');
            }
        }}>登录</button>
    </div>
}

function Personal() {
    return <h1>个人中心</h1>
}

function App(props) {
    return (
        <Router>
            <div>
                <Link to='/'>首页</Link><br/>
                <Link to='/login'>登录页</Link><br/>
                <Link to='/personal'>个人中心</Link><br/>
            </div>
            <div>
                <Switch>
                    <Route path='/login' component={Login} />
                    <ProtectedRoute path='/personal' component={Personal}/>
                    <Route path='/' component={Home}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;