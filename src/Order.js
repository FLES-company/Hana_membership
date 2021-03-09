import React, { Component, useState } from "react";
import "./Order.css";
import icon_back from "./img/right-arrow.png";
import icon_favorites from "./img/icon_favorites.png";
import icon_favorites_cancle from "./img/icon_favorites_cancle.png";
import { Routes, Link, Switch, Route, BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";
import Tab4 from "./Tab4";
import Tab5 from "./Tab5";
import { render } from "@testing-library/react";

const obj = {
  0: <Tab1 />,
  1: <Tab2 />,
  2: <Tab3 />,
  3: <Tab4 />,
  4: <Tab5 />,
};

function ClickHandler() {
  const [obj] = useState(0);
}

function Order() {
  return (
    <div className="Order">
      {/* back_header : s */}
      <div className="back_header">
        <div className="back_header_inner">
          <a href="/login" className="header_icon_item icon_back">
            <div className="icon_img">
              <img src={icon_back} Link to="/login" />
            </div>
          </a>
          <select className="Order_items">
            <option value="88(팔팔)">88(팔팔)</option>
          </select>
          <a href="/login" className="header_icon_item icon_favorites">
            <div className="icon_img">
              <img src={icon_favorites_cancle} Link to="/login" />
            </div>
          </a>
        </div>
      </div>
      {/* back_header : e */}
      <div className="Order_inner">
        <ul>
          <li className="Order_tab on" onClick={ClickHandler(0)}>
            <a href="/tab1">호가</a>
          </li>
          <li className="Order_tab" onClick={ClickHandler(1)}>
            <a href="/tab2">차트</a>
          </li>
          <li className="Order_tab" onClick={ClickHandler(2)}>
            <a href="/tab3">정보</a>
          </li>
          <li className="Order_tab" onClick={ClickHandler(3)}>
            <a href="/tab4">매도</a>
          </li>
          <li className="Order_tab" onClick={ClickHandler(4)}>
            <a href="/tab5">매수</a>
          </li>
        </ul>
        <div className="Order_contents">{/* 탭1~5 내용 삽입 */}</div>
      </div>
      <Footer />
    </div>
  );
}
export default Order;
