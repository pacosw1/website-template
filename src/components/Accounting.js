import React, { Component } from "react";
import { Post } from "./Post";
import { Transactions } from "./Transactions";
export const Accounting = props => {
  let { posts } = props;
  return (
    <div className="acc-container">
      <h1 style={{ paddingLeft: "2rem" }}>Accounting</h1>
      <div className="accounting">
        <div className="flex-end ">
          <select style={{ width: "12rem" }} className=" flex-item flex-end ">
            <option value="volvo">All Accounts ( $0.00 )</option>
            <option value="saab">Saab</option>
          </select>
        </div>

        <button className=" flex-item ">Add Expense</button>
        <button className=" flex-item ">Add Income</button>
        <select className="  flex-item ">
          <option value="volvo">More</option>
          <option value="saab">Saab</option>
        </select>
      </div>
      <Transactions posts={posts} />
    </div>
  );
};
