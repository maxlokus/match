import React from "react";

import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Button } from 'antd';

export default function UserInfo({ updateData, isSiderCollapsed }) {
  const logOut = () => {
    localStorage.clear();
    updateData(false);
  }
  return (
    <div className='sider_user-info'>
      <Avatar size='large' icon={<UserOutlined/>}/>
      {isSiderCollapsed ? null : <Button type="text" onClick={logOut}>Logout</Button>}
    </div>
  )
}