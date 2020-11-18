// 3rd party (node_modules)
import React, { useState, useEffect } from "react";
import { Layout } from "antd";

import Login from "./Login/Login";
import HomePage from "./HomePage/HomePage";

// service + api

import "./index.less";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const isAuthenticated = useSelector(state => global.isAuthenticated)

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
          <HomePage updateData={updateData} />
        </>
      ) : (
        <Login className="layout__element" updateData={updateData} />
      )}
    </Layout>
  );
}
