import React from 'react';
import {Route,Redirect} from 'react-router-dom';
import logininfo from "../utils/logininfo";
function ProtectedRoute({component: Component,children,...rest}) {
    return (
        <Route {...rest} render={values=>{
            if (logininfo.isLogin){
                return <Component />
            }else{
                return <Redirect to={{
                    pathname: '/login',
                    state: values.location.pathname
                }} />
            }
        }}/>
    );
}

export default ProtectedRoute;