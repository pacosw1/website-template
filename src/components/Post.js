import React, { Component } from "react";

export const Post = props => {
  let { title, text } = props;
  return (
    <div className="post">
      <input type="checkbox" />
      <h1>title</h1>
      <p>category</p>
      <p>Price</p>
    </div>
  );
};
