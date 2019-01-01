import React, { Component } from "react";

export const Post = props => {
  let { title, text } = props;
  return (
    <div className="post">
      <input className="" type="checkbox" />
      <p>Date</p>
      <h1>title</h1>
      <p className="flex-end">account</p>
      <p>$ 0.00</p>
      <p>category</p>
    </div>
  );
};
