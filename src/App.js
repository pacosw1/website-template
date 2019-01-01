import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Login } from "./components/Login";
import { Dashboard } from "./components/Dashboard";
import { Navbar } from "./components/Navbar";
import { Frontpage } from "./components/Frontpage";
import { Post } from "./components/Post";
import { SideMenu } from "./components/SideMenu";
import { Landingpage } from "./components/Landingpage";
import { Accounting } from "./components/Accounting";
import { Sidebar } from "./components/Sidebar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          title: "hello",
          text:
            "lorelo rleo lreo rleo rdfs sver  sfv sv sdvs dv sd v sd vsd v sd v"
        },
        {
          title: "hello",
          text:
            "lorelo rleo lreo rleo rdfs sver  sfv sv sdvs dv sd v sd vsd v sd v sdfsd sdfs df sd fs df sd f sdf sd f sd fs df s df sd fsd f sd fsd f sd fsd f sdf ds fsdf s dfs d fd  sdfsdf sd f sdf s d fsd f d f  fs f sd f sd f sdf ds f sd f sd fs df sd f sd fsd f sd f"
        },
        {
          title: "hello",
          text:
            "lorelo rleo lreo rleo rdfs sver  sfv sv sdvs dv sd v sd vsd v sd v"
        },
        {
          title: "hello",
          text:
            "lorelo rleo lreo rleo rdfs sver  sfv sv sdvs dv sd v sd vsd v sd v"
        },
        {
          title: "hello",
          text:
            "lorelo rleo lreo rleo rdfs sver  sfv sv sdvs dv sd v sd vsd v sd v"
        },
        {
          title: "hello",
          text:
            "lorelo rleo lreo rleo rdfs sver  sfv sv sdvs dv sd v sd vsd v sd v"
        },
        {
          title: "hello",
          text:
            "lorelo rleo lreo rleo rdfs sver  sfv sv sdvs dv sd v sd vsd v sd v"
        }
      ]
    };
  }
  render() {
    return (
      <div className="app">
        <Sidebar posts={this.state.list} />
        <Dashboard />
      </div>
    );
  }
}

export default App;
