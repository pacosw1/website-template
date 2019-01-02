import React from "react";
import "../ProductManager.css";

export const ProductManager = props => {
  return (
    <div className="product-container">
      <div className="product-header">
        <div>
          <p className="header-item right"> Product Manager</p>
        </div>
        <div className="right-header">
          <input
            className="header-item search"
            placeholder="Search for a product"
          />
          <select className="header-item">
            <option>Filter</option>
          </select>
          <select className="header-item">
            <option>Sort</option>
          </select>
        </div>
      </div>

      <div className="product-content">
        <div className="product-create">
          <input className="product-item" placeholder="Product Name" />
          <select className="product-item">
            <option>Category</option>
          </select>
          <input type="digit" className="product-item" placeholder="Price" />
          <button className="product-item">Create new Product</button>
        </div>

        <div className="product-list" />
      </div>
    </div>
  );
};
