import React from 'react';
import {history} from "umi";

function PrivateRoute(props) {
    console.log(props);
    if (localStorage.getItem("loginId")){
        return props.children;
    }else{
        return(
            <>
                此页面需要登录后才能访问，是否去 <button onClick={()=>history.push("/login")}>登录</button>
            </>
        )
    }
}

export default PrivateRoute;