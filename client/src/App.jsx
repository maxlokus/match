// 3rd party (node_modules)
import React, {useState} from "react";
import { Layout, Menu } from "antd";

import Login from "./Login/Login";
// service + api

import "./index.less";

export default function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    // const isAuthenticated = useSelector(state => global.isAuthenticated)

    const { Sider, Content } = Layout;

    return (
        <Layout className="app">
            {isAuthenticated ? (
                <>
                    <Sider className="app-sider">I am sider</Sider>
                    <Content>I am content</Content>
                </>
            ) : (
                <Login />
            )}
        </Layout>
    );
}
