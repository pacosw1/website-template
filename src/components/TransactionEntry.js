import React, { Component } from "react";
import "./css/Transaction.css";

export const TransactionEntry = props => {
  let { title, text } = props;
  return (
    <div className="transaction-view">
      <div className="transaction-container">
        <div>
          <input className="" style={{ borderStyle: "none" }} type="checkbox" />
          <p>Date</p>
          <div className="accounts">
            <h1>title</h1>
            <p>accounts</p>
          </div>
        </div>
        <div>
          <p>category</p>
          <p>$ 0.00</p>
        </div>
      </div>
    </div>
  );
};
