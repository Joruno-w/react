import React from 'react';
import {Link} from 'umi';

function PrivateRoute(props) {
    console.log(props);
    if (localStorage.getItem("loginId")){
        return props.children;
    }else{
        return(
            <>
                此页面需要登录后才能访问，是否去<Link to='/login'>登录</Link>
            </>
        )
    }
}

export default PrivateRoute;