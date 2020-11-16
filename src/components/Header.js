import React from "react";
import { Layout, Menu } from "antd";

import "./style.less";

const { Header } = Layout;

export const PageHeader = () => {
    return (
        <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
                <Menu.Item key="1">Home</Menu.Item>
                <Menu.Item key="2">Notifications</Menu.Item>
            </Menu>
        </Header>
    );
};
