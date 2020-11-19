import React from "react";

import { LikeOutlined, DislikeOutlined, ExclamationCircleTwoTone, PlusOutlined } from "@ant-design/icons";

import "./style.less";

export default function NewListItem() {
  return (
    <div className="group-list__item group-list__item_new">
      {/* <ExclamationCircleTwoTone twoToneColor="red" /> */}
      <span>
        <PlusOutlined className="plus-icon" /> Add new
      </span>
      <div className="group-list__item_new__state">
        {/* <button className="group-list__item_new__state_button like">
          <LikeOutlined />
        </button>
        <button className="group-list__item_new__state_button dislike">
          <DislikeOutlined />
        </button> */}
      </div>
    </div>
  );
}
