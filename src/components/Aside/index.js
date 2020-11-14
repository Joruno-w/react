import React, {Component} from 'react';
import './index.css';
class Aside extends Component {
    render() {
        return (
            <ul>
                <li>
                    <a href="/student">学生列表</a>
                </li>
                <li>
                    <a href="/student/add">添加学生</a>
                </li>
                <li>
                    <a href="/course">课程列表</a>
                </li>
                <li>
                    <a href="/course/add">添加课程</a>
                </li>
            </ul>
        );
    }
}

export default Aside;