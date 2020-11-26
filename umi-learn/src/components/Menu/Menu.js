import React from 'react';
import {NavLink, history} from 'umi';
import './index.css';

function Menu() {
    return (
        <div>
            <NavLink to='/'>首页</NavLink>
            <NavLink to='/login'>登录页</NavLink>
            <NavLink to='/welcome'>欢迎页</NavLink>
        </div>
    );
}

export default Menu;