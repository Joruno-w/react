import React, {Component} from 'react';
import './index.css';

class Login extends Component {
    render() {
        return (
            <div className="login-container">
                <div className="login">
                    <div>
                        <label>
                            用户名: <input type="text"/>
                        </label>
                    </div>
                    <div>
                        <label>
                            密码: <input type="password"/>
                        </label>
                    </div>
                    <div>
                        <button onClick={() => {
                            this.props.history.push('/');
                        }}>登录
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;