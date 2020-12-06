import React, {Component} from 'react';
import Form from "./index";
class Test extends Component {
    render() {
        return (
            <Form onSubmit={data=>{
                console.log(data);
            }}>
                <p>
                    用户名：<Form.Input name="loginId"/>
                </p>
                <p>
                    密码：<Form.Input type="password" name="loginPwd"/>
                </p>
                <p>
                    <Form.Button>提交</Form.Button>
                </p>
            </Form>
        );
    }
}

export default Test;
