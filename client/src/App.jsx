// 3rd party (node_modules)
import React, { useState } from "react";
import { Layout, Menu } from "antd";

import Login from "./Login/Login";
// service + api

import "./index.less";

export default function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    // const isAuthenticated = useSelector(state => global.isAuthenticated)

    const { Sider, Content } = Layout;

    const updateData = (value) => {
        setIsAuthenticated(value);
    }
    return (
        <Layout className="app">
            {isAuthenticated ? (
                <>
                    <Sider className="app-sider">I am sider</Sider>
                    <Content>I am content</Content>
                </>
            ) : (
                <Login updateData={updateData} />
            )}
        </Layout>
    );
}
