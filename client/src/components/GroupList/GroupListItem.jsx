import React from 'react';

import { LikeOutlined, DislikeOutlined, StarTwoTone } from "@ant-design/icons";

import './style.less';

export default function GroupListItem({ listItem }) {
  return (
    <div className='group-list__item'>
      {listItem.positionInList < 4 ? <StarTwoTone twoToneColor="#d2c720"/> : null}
      <span>{listItem.title}</span>
      <div className='group-list__item__state'>
        <div className='group-list__item__state_likes'>
          <LikeOutlined/>
          <span>{listItem.likes}</span>
        </div>
        <div className='group-list__item__state_dislikes'>
          <DislikeOutlined/>
          <span>{listItem.dislikes}</span>
        </div>
      </div>
    </div>
  )
}