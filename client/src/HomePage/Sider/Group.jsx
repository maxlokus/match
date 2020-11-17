import React from "react";

import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

export default function Groups({ isSiderCollapsed }) {
  return (
    <div className='sider_groups_item'>
      <Avatar size='large' icon={<UserOutlined/>}/>
      {isSiderCollapsed
        ? null
        : <span className='sider_groups_item-name'>Group name</span>
      }
    </div>
  )
}