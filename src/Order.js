import React, { Component, useState } from "react";
import "./Order.css";
import { Routes, Link, Switch, Route, BrowserRouter } from "react-router-dom";

import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";
import Tab4 from "./Tab4";
import Tab5 from "./Tab5";
import Header_sub from "./components/Header_sub";

const obj = {
  0: <Tab1 />,
  1: <Tab2 />,
  2: <Tab3 />,
  3: <Tab4 />,
  4: <Tab5 />,
};

export default class Order extends Component {
  state = {
    activateTab: 0,
  };
  ClickHandler = (id) => {
    // const [obj] = useState(0);
    this.setState({ activateTab: id });
  };
  render() {
    return (
      <div className="Order">
        {/* back_header : s */}
        <Header_sub />
        {/* back_header : e */}
        <div className="Order_inner">
          <ul>
            <li
              className={
                this.state.activateTab == 0 ? "Order_tab on" : "Order_tab"
              }
              onClick={() => this.ClickHandler(0)}
            >
              <span>호가</span>
            </li>
            <li
              className={
                this.state.activateTab == 1 ? "Order_tab on" : "Order_tab"
              }
              onClick={() => this.ClickHandler(1)}
            >
              <span>차트</span>
            </li>
            <li
              className={
                this.state.activateTab == 2 ? "Order_tab on" : "Order_tab"
              }
              onClick={() => this.ClickHandler(2)}
            >
              {/* <a href="/tab3">정보</a> */}
              <span>정보</span>
            </li>
            <li
              className={
                this.state.activateTab == 3 ? "Order_tab on" : "Order_tab"
              }
              onClick={() => this.ClickHandler(3)}
            >
              {/* <a href="/tab4">매도</a> */}
              <span>매도</span>
            </li>
            <li
              className={
                this.state.activateTab == 4 ? "Order_tab on" : "Order_tab"
              }
              onClick={() => this.ClickHandler(4)}
            >
              {/* <a href="/tab5">매수</a> */}
              <span>매수</span>
            </li>
          </ul>
        </div>

        <div className="Order_contents">
          {/* 선택된 탭의 컴포넌트를 보여줌 */}
          {obj[this.state.activateTab]}
        </div>
      </div>
    );
  }
}
