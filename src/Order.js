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


export default class Order extends Component {
  state = {
    activateTab : 0
  }
  ClickHandler = (id) => {
    // const [obj] = useState(0);
    this.setState({activateTab : id})
  }
  render(){
    return (
      <div className="Order">
        {/* back_header : s */}
        <div className="back_header">
          <div className="back_header_inner">
            <Link to="/login" className="header_icon_item icon_back">
              <div className="icon_img">
                <img src={icon_back} />
              </div>
            </Link>
            <select className="Order_items">
              <option value="88(팔팔)">88(팔팔)</option>
              <option value="99(구구)">99(구구)</option>
            </select>
            <Link to="/login" className="header_icon_item icon_favorites">
              <div className="icon_img">
                <img src={icon_favorites_cancle} />
              </div>
            </Link>
          </div>
        </div>
        {/* back_header : e */}
        <div className="Order_inner">
          <ul>
            <li className={this.state.activateTab == 0 ? 'Order_tab on' : 'Order_tab'} onClick={ () => this.ClickHandler(0)}>
              <span>호가</span>
            </li>
            <li className={this.state.activateTab == 1 ? 'Order_tab on' : 'Order_tab'} onClick={ () => this.ClickHandler(1)}>
              <span>차트</span>
            </li>
            <li className={this.state.activateTab == 2 ? 'Order_tab on' : 'Order_tab'} onClick={ () => this.ClickHandler(2)}>
              {/* <a href="/tab3">정보</a> */}
              <span>정보</span>
            </li>
            <li className={this.state.activateTab == 3 ? 'Order_tab on' : 'Order_tab'} onClick={ () => this.ClickHandler(3)}>
              {/* <a href="/tab4">매도</a> */}
              <span>매도</span>
            </li>
            <li className={this.state.activateTab == 4 ? 'Order_tab on' : 'Order_tab'} onClick={ () => this.ClickHandler(4)}>
              {/* <a href="/tab5">매수</a> */}
              <span>매수</span>
            </li>
          </ul>
        </div>
        
        <div className="Order_contents">
            {/* 선택된 탭의 컴포넌트를 보여줌 */}
            { obj[this.state.activateTab]}
          </div>
        <Footer />
      </div>
    );
  }
};
