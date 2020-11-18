import React from 'react';

import { LikeOutlined, DislikeOutlined, ExclamationCircleTwoTone } from "@ant-design/icons";

import './style.less';

export default function NewListItem() {
  const newItem = 'Linkin park - In the end';
  return (
    <div className='group-list__new-item'>
      <ExclamationCircleTwoTone twoToneColor="red"/>
      <span>{newItem}</span>
      <div className='group-list__new-item__state'>
        <button className='group-list__new-item__state_button like'>
          <LikeOutlined/>
        </button>
        <button className='group-list__new-item__state_button dislike'>
          <DislikeOutlined/>
        </button>
      </div>
    </div>
  )
}