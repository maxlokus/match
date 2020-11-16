import React, {useState} from "react";
import { Input } from 'antd';
import {SongList} from "./SongList";

const { Search } = Input;

export const ItemInput = () => {
  const [item, setItem] = useState('')
  const onSearch = value => setItem(value);
  return (
    <>
    <Search
      placeholder="input song"
      allowClear
      enterButton="Add"
      size="large"
      onSearch={onSearch}
    />
    <SongList item={item}/>
    </>
  )
}