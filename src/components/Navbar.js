import React, { Component } from "react";

export const Navbar = props => {
  return (
    <div className="nav">
      <p>CF</p>
      <p>Home</p>
      <input placeholder="search" />
      <p id="register">Sign In</p>
    </div>
  );
};
