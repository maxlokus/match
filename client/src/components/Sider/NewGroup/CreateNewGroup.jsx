import React, { useState } from "react";

import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import "./style.less";

export default function CreateNewGroups({ isSiderCollapsed }) {
  return (
    <div className="sider_groups_item new-group">
      {isSiderCollapsed ? <Button type="primary" shape="circle" icon={<PlusOutlined />} /> : <Button type="link">Create new Group</Button>}
    </div>
  );
}
