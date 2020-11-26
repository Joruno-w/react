import React from 'react';
import {history} from "umi";

function Welcome(props) {
    const loginId = localStorage.getItem("loginId");
    if (loginId){
        return <div>
            欢迎你, {loginId}
            <button onClick={()=>{
                localStorage.removeItem("loginId");
                history.push('/login');
            }}>注销</button>
        </div>
    }
    return null;
}

export default Welcome;