import React, { useState } from "react";

import Group from "./Group";
import UserInfo from "./UserInfo";

import { Layout } from "antd";
import { LeftCircleTwoTone, RightCircleTwoTone } from "@ant-design/icons";

import "./style.less";

export default function HomePageSider({ updateData }) {
  const [isSiderCollapsed, setIsSiderCollapsed] = useState(false);

  const { Sider } = Layout;

  const collapseSider = () => {
    setIsSiderCollapsed(!isSiderCollapsed);
  };
  return (
    <Sider trigger={null} collapsible collapsed={isSiderCollapsed} className="app-sider layout__element">
      <div className="sider_groups">
        <div className="groups-header">
          <h2 className="groups-header-name">Groups</h2>
          {isSiderCollapsed ? (
            <RightCircleTwoTone twoToneColor="#267827" onClick={collapseSider} className="icon-collapse-right" />
          ) : (
            <LeftCircleTwoTone twoToneColor="#267827" onClick={collapseSider} className="icon-collapse-left" />
          )}
        </div>
        <Group isSiderCollapsed={isSiderCollapsed} />
      </div>
      <UserInfo updateData={updateData} isSiderCollapsed={isSiderCollapsed} />
    </Sider>
  );
}
