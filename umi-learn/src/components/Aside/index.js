import React from 'react';
import {NavLink} from 'umi'
import styles from './index.css';
function Index(props) {
    return (
        <ul className={styles.list}>
            <li className={styles.link}>
                <NavLink to="/">学生管理首页</NavLink>
            </li>
            <li className={styles.link}>
                <NavLink to="/student">查询学生</NavLink>
            </li>
            <li className={styles.link}>
                <NavLink to="/student/add">添加学生</NavLink>
            </li>
        </ul>
    );
}

export default Index;