import React, { Component } from "react";
import Header from "./components/Header";
import Gnb from "./components/Gnb";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";


class Home extends Component {
  render() {
    return (
      <div className="home">
        <Header />
        <Gnb />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default Home;
