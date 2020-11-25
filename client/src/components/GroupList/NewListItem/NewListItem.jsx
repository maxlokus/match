import React, { useState, useRef, useEffect } from "react";
import { Input, AutoComplete } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import { findItem } from './service';

import "./style.less";

const { Search } = Input;

export default function NewListItem({ list }) {
  const [isInputOff, setIsInputOff] = useState(true);
  const [options, setOptions] = useState([]);
  const [itemExist, setItemExist] = useState('');

  let inputRef = useRef();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [isInputOff]);

  const toggleInput = () => {
    setIsInputOff(!isInputOff);
  };

  const showAutoComplete = (searchText) => {
    setOptions(
      !searchText ? [] : [findItem(searchText, list)],
    );
  }
  return isInputOff ? (
    <div className="group-list__item group-list__item_new" onClick={toggleInput}>
      <span>
        <PlusOutlined className="plus-icon"/> Add new
      </span>
    </div>
  ) : (
    <div
      className="group-list__item group-list__input"
      // onBlur={toggleInput}
    >
      <AutoComplete
        options={options}
        style={{
          width: '100%',
        }}
        onSelect={() => setItemExist('Sorry,this item already exist')}
        onSearch={showAutoComplete}
      >
        <Search placeholder="input search text" enterButton="Add" size="large" ref={inputRef}
                onSearch={value => console.log(value)}/>
      </AutoComplete>
      <p className={'group-list__error'}>{itemExist}</p>
    </div>
  );
}
