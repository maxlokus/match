import React from 'react';

import GroupListItem from "./GroupListItem";
import NewListItem from "./NewListItem/NewListItem";

import { Layout } from "antd";

import './style.less';

export default function GroupList() {
  const { Content } = Layout;
  const list = [{
    title: 'Nirvana - Smells like teen spirit',
    likes: 3,
    dislikes: 1,
    positionInList: 1,
  },
    {
      title: 'Adele - Hello',
      likes: 2,
      dislikes: 2,
      positionInList: 2,
    }];
  return (
    <Content className="layout__element">
      <div className='group-list'>
        <NewListItem/>
        {list.map((item) => {
          return (
            <GroupListItem listItem={item}/>
          )
        })}
      </div>
    </Content>
  )
}