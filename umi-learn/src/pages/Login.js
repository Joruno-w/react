import React,{useRef} from 'react';
import {history} from "umi";

function Login(props) {
    const loginId = useRef();
    const loginPwd = useRef();
    return (
        <div>
            <div>
                <label>
                    账号: <input type="text" ref={loginId}/>
                </label>
            </div>
            <div>
                <label>
                    密码: <input type="password" ref={loginPwd} />
                </label>
            </div>
            <button onClick={()=>{
                if (loginPwd.current.value === '123123'){
                    localStorage.setItem("loginId",loginId.current.value);
                    history.push('/welcome');
                }
            }}>登录</button>
        </div>
    );
}

export default Login;