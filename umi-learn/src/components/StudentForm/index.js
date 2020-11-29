import React,{useState,useEffect} from 'react';
import {Button, Form, Input,Radio,InputNumber,message,Spin} from "antd";
import {addStudentBySearch, getStudentBysNo, updateStudentBySearch} from "../../services/getStudent";
import {withRouter} from 'umi';
const colConfig = {
    labelCol: {
        span: 4
    },
    wrapperCol: {
        span: 8
    }
}

function StudentForm(props) {
    const [form] = Form.useForm();
    const [loading,setLoading] = useState(false);
    useEffect(()=>{
        (async ()=>{
            setLoading(true);
            const stu = await getStudentBysNo(props.sNo);
            setLoading(false);
            form.setFieldsValue(stu);
        })();
    },[]);
    async function add(stuObj){
        setLoading(true);
        const result = await addStudentBySearch(stuObj);
        setLoading(false);
        if (result.status==="success"){
            await message.success("添加学生成功!",1);
            props.history.push('/student');
        }else{
            await message.error("添加学生失败!",2);
            form.resetFields();
        }
    }

    async function update(stuObj){
        setLoading(true);
        const result = await updateStudentBySearch(stuObj);
        console.log(result);
        setLoading(false);
        if (result.status==="success"){
            await message.success("修改学生成功!",1);
            props.history.push('/student');
        }
    }
    function onFinish(){
        let formObj = form.getFieldsValue();
        if (props.sNo){ //修改学生
            update(formObj);
        }else { //添加学生
            add(formObj);
        }
    }
    return (
        <Spin spinning={loading} tip="加载中...">
            <Form {...colConfig} onFinish={onFinish} form={form}>
                <Form.Item label="姓名" name="name" rules={[
                    {
                        required: true,
                        message: '请输入姓名!'
                    }
                ]}>
                    <Input/>
                </Form.Item>
                <Form.Item label="学号" name="sNo" rules={[
                    {
                        required: true,
                        message: '请输入学号!',
                    },
                ]}>
                    <Input disabled={props.sNo!==undefined}/>
                </Form.Item>
                <Form.Item label="性别" name="sex" rules={[
                    {
                        required: true,
                        message: '请选择性别!',
                    },
                ]} initialValue={1}>
                    <Radio.Group buttonStyle="solid">
                        <Radio.Button value={1}>男</Radio.Button>
                        <Radio.Button value={0}>女</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="出生年" name="birth" rules={[
                    {
                        required: true,
                        message: '请输入出生日期!',
                    },
                ]}>
                    <InputNumber/>
                </Form.Item>
                <Form.Item label="手机号" name="phone" rules={[
                    {
                        required: true,
                        message: '请输入手机号!',
                    },
                    {pattern:/^1\d{10}/,message: '手机号码格式不正确'}
                ]}>
                    <Input />
                </Form.Item>
                <Form.Item label="住址" name="address" rules={[
                    {
                        required: true,
                        message: '请输入住址!',
                    },
                ]}>
                    <Input />
                </Form.Item>
                <Form.Item label="邮箱" name="email" rules={[
                    {
                        required: true,
                        message: '请输入邮箱!',
                    },
                    {pattern: /\w+@\w+\.\w+/,message: '邮箱格式不正确'}
                ]}>
                    <Input />
                </Form.Item>
                <Form.Item wrapperCol={{offset: 4,span: 8}}>
                    <Button type="primary" htmlType="submit" block>提交</Button>
                </Form.Item>
            </Form>
        </Spin>
    );
}

export default withRouter(StudentForm);