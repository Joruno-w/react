import React, {Component} from 'react';
import './index.css';
class Header extends Component {
    render() {
        return (
            <div className="header-container">
                <h1 className="title">学生管理系统</h1>
                <div className="operation">
                    <span>用户名</span>
                    <span>|</span>
                    <button>退出</button>
                </div>
            </div>
        );
    }
}

export default Header;