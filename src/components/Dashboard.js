import React, { Component } from "react";

export const Dashboard = props => {
  return (
    <React.Fragment>
      <div className="dash">
        <div>
          <h1>Cash Flow</h1>
          <p>Chart</p>
        </div>
        <div id="test">
          <h1>Profit / Loss</h1>
        </div>
        <div>
          <h1>Net Income</h1>
        </div>
        <div>
          <h1>Expenses Chart</h1>
        </div>
        <div>
          <h1>Payable </h1>
        </div>
        <div>
          <h1>More Options</h1>
        </div>
      </div>
    </React.Fragment>
  );
};
