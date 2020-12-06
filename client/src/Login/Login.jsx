import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";

import Registration from '../Registration/Registration';

import "./style.less";

export default function Login({ updateData }) {
  const [rememberMeState, setRememberMeState] = useState(true);
  const [hasAccount, setHasAccount] = useState(true);
  // const layout = {
  //     labelCol: { span: 8 },
  //     wrapperCol: { span: 16 },
  // };
  // const tailLayout = {
  //     wrapperCol: { offset: 8, span: 16 },
  // };

  const onFinish = () => {
    updateData(true);
    if (rememberMeState) {
      localStorage.setItem('remember', 'yes')
    }
  };

  const onFinishFailed = errorInfo => {
  };

  return (
    hasAccount
    ?<section className="login-page">
      <h1>Match</h1>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className="login-form"
      >
        <Form.Item name="login"
                   rules={[{ required: true, message: "Please input your login!" }]}>
          <Input placeholder="Login"/>
        </Form.Item>

        <Form.Item name="password"
                   rules={[{ required: true, message: "Please input your password!" }]}>
          <Input.Password placeholder="Password"/>
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" className="login-form__remember-block">
          <Checkbox onChange={({target}) => setRememberMeState(target.checked)}>Remember me</Checkbox>
          </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className='login-form_submit-button'>
            Submit
          </Button>
          </Form.Item>
          <div className='login-form__registration-link'>
            <Button type="link" onClick={() => setHasAccount(false)}>Don`t have an account?</Button>
          </div>
        </Form>
      </section>
      : <Registration updateData={updateData }/>
  );
}
