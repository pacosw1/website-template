import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Login } from "./components/Login";
import { Dashboard } from "./components/Dashboard";
import { Navbar } from "./components/Navbar";
import { Frontpage } from "./components/Frontpage";
import { Post } from "./components/Post";
import { SideMenu } from "./components/SideMenu";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <div className="wrapper">
          <SideMenu />
          <Post />
        </div>
      </div>
    );
  }
}

export default App;
