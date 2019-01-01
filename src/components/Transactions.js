import React, { Component } from "react";
import { Post } from "./Post";

export const Transactions = props => {
  let { posts } = props;
  let postsArray = posts.map(post => {
    return <Post title={post.title} text={post.text} />;
  });
  return <div id="accTable">{postsArray}</div>;
};
