import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";

import "./style.less";

export default function Login({ updateData }) {
  const [rememberMeState, setRememberMeState] = useState(true);
  // const layout = {
  //     labelCol: { span: 8 },
  //     wrapperCol: { span: 16 },
  // };
  // const tailLayout = {
  //     wrapperCol: { offset: 8, span: 16 },
  // };
  const rememberUser = ({ target }) => {
    if (target.checked) {
      setRememberMeState(true);
    } else {
      setRememberMeState(false);
    }
  }
  const onFinish = () => {
    updateData(true);
    if (rememberMeState) {
      localStorage.setItem('remember', 'yes')
    }
  };

  const onFinishFailed = errorInfo => {
  };

  return (
    <section className="login-page">
      <h1>Match</h1>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className="login-form"
      >
        <Form.Item label="Username" name="username"
                   rules={[{ required: true, message: "Please input your username!" }]}>
          <Input/>
        </Form.Item>

        <Form.Item label="Password" name="password"
                   rules={[{ required: true, message: "Please input your password!" }]}>
          <Input.Password/>
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" className="login-form__remember-block">
          <Checkbox onChange={rememberUser}>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className='login-form_submit-button'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
}
