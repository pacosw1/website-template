import React, { Component } from "react";
import { TransactionEntry } from "./TransactionEntry";
import "./css/Transaction.css";

export const Transactions = props => {
  let { posts } = props;
  let postsArray = posts.map(entry => {
    return <TransactionEntry title={entry.title} text={entry.text} />;
  });
  return <div className="acc-table">{postsArray}</div>;
};
