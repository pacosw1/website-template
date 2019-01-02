import React, { Component } from "react";
import { TransactionEntry } from "./TransactionEntry";
import { Transactions } from "./Transactions";
import "../Accounting.css";
export const Accounting = props => {
  let { posts, onCreateTransaction } = props;
  return (
    <div className="acc-container">
      <h1>Accounting</h1>
      <div className="acc-nav">
        <div className="left">
          <select style={{ width: "12rem" }} className=" flex-item flex-end ">
            <option value="volvo">All Accounts ( $0.00 )</option>
            <option value="saab">Saab</option>
          </select>
        </div>

        <div className="right">
          <button onClick={() => onCreateTransaction()} className=" flex-item ">
            Add Expense
          </button>
          <button className=" flex-item ">Add Income</button>
          <select className="  flex-item ">
            <option value="volvo">More</option>
            <option value="saab">Saab</option>
          </select>
        </div>
      </div>
      <div className="table-header">
        <p />
      </div>

      <Transactions posts={posts} />
    </div>
  );
};
