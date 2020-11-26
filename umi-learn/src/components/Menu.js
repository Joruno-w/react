import React from 'react';
import {NavLink,history} from 'umi';

function Menu() {
    return (
        <>
            <div>
                <NavLink to='/'>去首页</NavLink>
                <button onClick={()=>history.push('/')}>去首页</button>
                <NavLink to='/sub'>去sub</NavLink>
                <button onClick={()=>history.push('/sub')}>去sub</button>
            </div>
        </>
    );
}

export default Menu;