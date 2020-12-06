import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";

// import "./style.less";

export default function Registration({ updateData }) {
    const [rememberMeState, setRememberMeState] = useState(true);

    const createAccount = () => {
        updateData(true);
        if (rememberMeState) {
          localStorage.setItem('remember', 'yes')
        }
      };
    
  return (
    <section className="login-page">
      <h1>Match</h1>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={createAccount}
        // onFinishFailed={onFinishFailed}
        className="login-form"
      >
         <Form.Item name="username"
                   rules={[{ required: true, message: "Please input your name!" }]}>
          <Input placeholder="Name"/>
        </Form.Item>
        <Form.Item name="login"
                   rules={[{ required: true, message: "Please input your login!" }]}>
          <Input placeholder="Login"/>
        </Form.Item>

        <Form.Item name="password"
                   rules={[{ required: true, message: "Please input your password!" }]}>
          <Input.Password placeholder="|Password"/>
              </Form.Item>
              
        <Form.Item name="confirm password"
                   rules={[{ required: true, message: "Please confirm your password!" }]}>
          <Input.Password placeholder="Confirm your password"/>
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" className="login-form__remember-block">
          <Checkbox onChange={({target}) => setRememberMeState(target.checked)}>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className='login-form_submit-button'>
          Create account  
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
}