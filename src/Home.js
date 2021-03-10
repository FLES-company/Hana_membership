import React, {useState, Component } from "react";
import Header from "./components/Header";
import Gnb from "./components/Gnb";

import Footer from "./components/Footer";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import Interest from "./Interest";
import Market from "./Market";
import Order from "./Order";
import Tab2 from "./Tab2";
import History from "./History";
import Mypage from "./Mypage";

const obj = {
  0: <Interest />,
  1: <Market />,
  2: <Order />,
  3: <Tab2 />,
  4: <History />,
  5: <Mypage />
};

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Header />
        <Gnb />
        <Footer />
      </div>
    );
  }
}

export default Home;
