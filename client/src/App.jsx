// 3rd party (node_modules)
import React, { useState, useEffect } from "react";
import { Layout } from "antd";

import Login from "./Login/Login";
import HomePageSider from "./HomePage/Sider/HomePageSider";

// service + api

import "./index.less";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const isAuthenticated = useSelector(state => global.isAuthenticated)

  const { Content } = Layout;

  useEffect(() => {
    if (localStorage.getItem("remember") === "yes") {
      setIsAuthenticated(true);
    }
  }, [isAuthenticated]);

  const updateData = value => {
    setIsAuthenticated(value);
  };

  return (
    <Layout className="app">
      {isAuthenticated ? (
        <>
          <HomePageSider updateData={updateData} />
          <Content className="layout__element">I am content</Content>
        </>
      ) : (
        <Login className="layout__element" updateData={updateData} />
      )}
    </Layout>
  );
}
