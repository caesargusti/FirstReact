import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { useHistory, Redirect } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 8,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 6,
      span: 6
    },
  };

export default function Login(){
    const history = useHistory();

      const onFinish = (values) => {
        axios({
            method: "GET",
            url: "/mocks/login.json",
            // body: {
            //     cust_email : values.username,
            //     cust_password : values.password,
            //     },
        })
        .then(function(res){
            window.localStorage.setItem("token", res.data.data.token)
            history.push('/')
            console.log(res.data.data.token)
        })
        
      };
    
      const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };

      if(window.localStorage.getItem("token")){
        return <Redirect to="/" />;
    }

    return (
        <div className="login-form">
            <h1>Login</h1>
            <Form
            {...layout}
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            >
            <Form.Item
                label="Username"
                name="username"
                rules={[
                {
                    required: true,
                    message: 'Please input your username!',
                },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                {
                    required: true,
                    message: 'Please input your password!',
                },
                ]}
            >
            <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
                <Checkbox>Remember me</Checkbox>
            </Form.Item>
            </Form>
        </div>
    );
};
