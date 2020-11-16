import React from "react";

export const SongList = ({item}) => {
  if (item) {
    return (
      <ul>
        <li>{item}</li>
      </ul>
    )
  }
  return null
}