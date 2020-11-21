import React, { useState, useRef, useEffect } from "react";

import { Input } from "antd";
import { LikeOutlined, DislikeOutlined, ExclamationCircleTwoTone, PlusOutlined } from "@ant-design/icons";

import "./style.less";

const { Search } = Input;

export default function NewListItem() {
  const [isInputOff, setIsInputOff] = useState(true);

  let inputRef = useRef();

  useEffect(() => {
    console.log("NewListItem -> inputRef.current", inputRef.current);

    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [isInputOff]);

  const toggleInput = () => {
    setIsInputOff(!isInputOff);
  };
  return isInputOff ? (
    <div className="group-list__item group-list__item_new" onClick={toggleInput}>
      {/* <ExclamationCircleTwoTone twoToneColor="red" /> */}
      <span>
        <PlusOutlined className="plus-icon" /> Add new
      </span>
    </div>
  ) : (
    <div className="group-list__item group-list__input" onBlur={toggleInput}>
      <Search placeholder="input search text" enterButton="Add" size="large" ref={inputRef} onSearch={() => console.log(e.target.value)} />
    </div>
  );
  // onSearch={onSearch} />
}
