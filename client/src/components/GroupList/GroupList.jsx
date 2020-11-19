import React from "react";

import GroupListItem from "./GroupListItem";
import NewListItem from "./NewListItem/NewListItem";

import { Layout } from "antd";

import "./style.less";
import index from "babel-plugin-import/src";

export default function GroupList() {
  const { Content } = Layout;

  const list = [
    {
      title: "Nirvana - Smells like teen spirit",
      likes: 3,
      dislikes: 1,
    },
    {
      title: "Adele - Hello",
      likes: 2,
      dislikes: 2,
    },
    {
      title: "Linkin park - In the end",
      likes: 6,
      dislikes: 0,
    },
  ];

  list.sort(function (a, b) {
    if (a.likes > b.likes) {
      return -1;
    }
    if (a.likes < b.likes) {
      return 1;
    }
    return 0;
  });

  return (
    <Content className="layout__element">
      <div className="group-list">
        <NewListItem />
        {list.map((item, index) => {
          return <GroupListItem listItem={item} positionInList={index} />;
        })}
      </div>
    </Content>
  );
}
