import React from "react";
import { Form, Input, Button, Checkbox } from "antd";

import "./style.less";

export default function Login() {
    // const layout = {
    //     labelCol: { span: 8 },
    //     wrapperCol: { span: 16 },
    // };
    // const tailLayout = {
    //     wrapperCol: { offset: 8, span: 16 },
    // };

    const onFinish = values => {};

    const onFinishFailed = errorInfo => {};

    return (
        <section className="login-page">
            <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                className="login-form"
            >
                <Form.Item label="Username" name="username" rules={[{ required: true, message: "Please input your username!" }]}>
                    <Input />
                </Form.Item>

                <Form.Item label="Password" name="password" rules={[{ required: true, message: "Please input your password!" }]}>
                    <Input.Password />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked" className="login-form__remember-block">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </section>
    );
}
