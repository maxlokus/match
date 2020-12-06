import React, { useState } from "react";

import Group from "./Group/Group";
import UserInfo from "./UserInfo";
import CreateNewGroup from './NewGroup/CreateNewGroup';

import { Layout } from "antd";
import { LeftCircleTwoTone, RightCircleTwoTone } from "@ant-design/icons";

import "./style.less";

export default function Sider({ updateData }) {
  const [isSiderCollapsed, setIsSiderCollapsed] = useState(false);

  const { Sider } = Layout;

  const collapseSider = () => {
    setIsSiderCollapsed(!isSiderCollapsed);
  };
  return (
    <Sider trigger={null} collapsible collapsed={isSiderCollapsed} className="app-sider layout__element">
      <button className="collapse-button">
        {isSiderCollapsed ? (
          <RightCircleTwoTone twoToneColor="#267827" onClick={collapseSider} className="collapse-icon" />
        ) : (
          <LeftCircleTwoTone twoToneColor="#267827" onClick={collapseSider} className="collapse-icon" />
        )}
      </button>

      <div className="sider_groups">
        <div className="groups-header">
          <h2 className="groups-header-name">{!isSiderCollapsed && "Groups"}</h2>
        </div>
        <Group isSiderCollapsed={isSiderCollapsed} />
        <CreateNewGroup isSiderCollapsed={isSiderCollapsed}/>
      </div>
      <UserInfo updateData={updateData} isSiderCollapsed={isSiderCollapsed} />
    </Sider>
  );
}
