import React, {useState, Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

// import Header from "./components/Header";
// import Gnb from "./components/Gnb";
// import Footer from "./components/Footer";

// import Interest from "./Interest";
// import Market from "./Market";
// import Order from "./Order";
// import Tab2 from "./Tab2";
// import History from "./History";
// import Mypage from "./Mypage";

import Main from "./Main";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Main />
      </div>
    );
  }
}

export default Home;
