import React from "react";

import Sider from "../components/Sider/Sider";
import GroupList from "../components/GroupList/GroupList";

import "../components/Sider/style.less";

export default function HomePage({ updateData }) {
  return (
    <>
      <Sider updateData={updateData} />
      <GroupList />
    </>
  );
}
