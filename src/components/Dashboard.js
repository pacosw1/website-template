import React, { Component } from "react";

export const Dashboard = props => {
  return (
    <div className="dash-container">
      <Dashboard />
      <div className="dash-menu">
        <h3>Additional Options</h3>
        <a className="link">
          <h4>Add a vendor</h4>
          <h4>Add a customer</h4>

          <h4>Customize invoices</h4>
        </a>
      </div>
      <div className="dash">
        <div className="dash-item">
          <div className="item-header">
            <h3>Cash Flow</h3>
            <a className="link">
              <h4>View Report</h4>
            </a>
          </div>
          <p>Cash coming in and going out of your business.</p>
        </div>
        <div className="dash-item">
          <div className="item-header">
            <h3>Cash Flow</h3>
            <a className="link">
              <h4>View Report</h4>
            </a>
          </div>
          <p>Income and expenses only (includes unpaid invoices and bills).</p>
        </div>
        <div className="dash-item">
          <div className="item-header">
            <h3>Cash Flow</h3>
            <a className="link">
              <h4>View Report</h4>
            </a>
          </div>
        </div>
        <div className="dash-item">
          <div className="item-header">
            <h3>Cash Flow</h3>
            <a className="link">
              <h4>View Report</h4>
            </a>
          </div>
        </div>
        <div className="dash-item">
          <div className="item-header">
            <h3>Cash Flow</h3>
            <a className="link">
              <h4>View Report</h4>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
