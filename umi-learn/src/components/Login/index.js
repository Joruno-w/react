import React,{useRef} from 'react';
import styles from './index.css';
import {connect} from 'dva';

function Login(props) {
    const loginIdRef = useRef();
    const loginPwdRef = useRef();
    return (
        <div className={styles.wrapper}>
            <div className={styles.form}>
                <div>
                    <label>
                        账号: <input type="text" ref={loginIdRef} className={styles.login}/>
                    </label>
                </div>
                <div>
                    <label>
                        密码: <input type="password" ref={loginPwdRef} className={styles.login}/>
                    </label>
                </div>
                <button className={styles.loginBtn} onClick={()=>{
                    const loginId = loginIdRef.current.value;
                    const loginPwd = loginPwdRef.current.value;
                    console.log(loginId,loginPwd);
                    props.onLogin && props.onLogin(loginId,loginPwd);
                }}>登录</button>
            </div>
        </div>
    );
}

const mapDispatchToProps = dispatch=>({
    onLogin(loginId,loginPwd){
        dispatch({type: "loginUser/login",payload: {loginId,loginPwd}});
    }
});


export default connect(null,mapDispatchToProps)(Login);