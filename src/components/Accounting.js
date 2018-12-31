import React, { Component } from "react";
import { Post } from "./Post";
export const Accounting = props => {
  let { posts } = props;
  let postsArray = posts.map(post => {
    return <Post title={post.title} text={post.text} />;
  });
  return (
    <React.Fragment>
      <div className="accounting">
        <select>
          <option value="volvo">All Accounts</option>
          <option value="saab">Saab</option>
        </select>

        <div className="rightMenu">
          <button>Add Income</button>
          <button>Add Expense</button>
          <select>
            <option value="volvo">All Accounts</option>
            <option value="saab">Saab</option>
          </select>
        </div>
      </div>
      <div id="accTable">{postsArray}</div>
    </React.Fragment>
  );
};
