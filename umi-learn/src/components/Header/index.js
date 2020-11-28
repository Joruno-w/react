import React from 'react';
import styles from './index.css';
import {connect} from 'dva';

function Index(props) {
    return (
        <div className={styles.header}>
            <h1 className={styles.title}>学生管理系统</h1>
            <div className={styles.operation}>
                <span>欢迎你</span>
                <span>|</span>
                <span>{props.loginUser}</span>
                <button className={styles.button} onClick={()=>{
                    props.onLoginOut && props.onLoginOut();
                }}>注销</button>
            </div>
        </div>
    );
}

const mapStateToProps = state=>({
   loginUser: state.loginUser
});

const mapDispatchToProps = dispatch=>({
   onLoginOut(){
       dispatch({type: "loginUser/loginOut"});
   }
});

export default connect(mapStateToProps,mapDispatchToProps)(Index);