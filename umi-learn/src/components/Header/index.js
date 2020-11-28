import React from 'react';
import styles from './index.css';
import {connect} from 'dva';
import {Button} from "antd";
import {LogoutOutlined} from '@ant-design/icons'

function Index(props) {
    return (
        <div className={styles.header}>
            <h1 className={styles.title}>学生管理系统</h1>
            <div className={styles.operation}>
                <span>欢迎你</span>
                <span>|</span>
                <span>{props.loginUser}</span>
                <Button type="primary" size="small" onClick={()=>{
                    props.onLoginOut && props.onLoginOut();
                }} style={{paddingLeft: 20}}>
                    <LogoutOutlined />
                </Button>
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