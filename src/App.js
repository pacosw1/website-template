import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Login } from "./components/Login";
import { Dashboard } from "./components/Dashboard";
import { Navbar } from "./components/Navbar";
import { Frontpage } from "./components/Frontpage";
import { TransactionEntry } from "./components/TransactionEntry";
import { SideMenu } from "./components/SideMenu";
import { Landingpage } from "./components/Landingpage";
import { Accounting } from "./components/Accounting";
import { Sidebar } from "./components/Sidebar";
import { Transactions } from "./components/Transactions";
import { ProductManager } from "./components/ProductManager";

class App extends Component {
  constructor(props) {
    super(props);
    this.onCreateTransaction = this.onCreateTransaction.bind(this);
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
        <Sidebar />
        <Accounting
          onCreateTransaction={this.onCreateTransaction}
          posts={this.state.list}
        />
      </div>
    );
  }
  onCreateTransaction() {
    let table1 = document.getElementById("accTable");
    let table = document.getElementById("create-new");
    console.log(table[0]);
    table.style.display = "none";
    table1.style.width = "150vh";
  }
}

export default App;
