import React from "react";
import "./Order.css";
import icon_back from "./img/right-arrow.png";
import icon_favorites from "./img/icon_favorites.png";
import { Routes, Link, Switch, Route, BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";
import Tab4 from "./Tab4";
import Tab5 from "./Tab5";
import { render } from "@testing-library/react";

const obj = {
    0 : <Tab1 />,
    1 : <Tab2 />,
    2 : <Tab3 />,
    3 : <Tab4 />,
    4 : <Tab5 />
}

export default class Order{

     // 'state' is not defined
     state = {
        activeTab : 0
    }

    // 'clickHandler' is not defined
    clickHandler = (id) => {
       this.setState({activeTab : id})
    }
    render(){
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
                  <select name="Order_items">
                    <option value="88(팔팔)">88(팔팔)</option>
                  </select>
                  <a href="/login" className="header_icon_item icon_favorites">
                    <div className="icon_img">
                      <img src={icon_favorites} Link to="/login" />
                    </div>
                  </a>
                </div>
              </div>
              {/* back_header : e */}
              <div className="Order_inner">
                <ul>
                  <li className="Order_tab" onClick={this.clickHandler(0)}>
                    <a href="#tab1">호가</a>
                  </li>
                  <li className="Order_tab" onClick={() => this.clickHandler(1)}>
                    <a href="#tab2">차트</a>
                  </li>
                  <li className="Order_tab" onClick={() => this.clickHandler(2)}>
                    <a href="#tab3">정보</a>
                  </li>
                  <li className="Order_tab" onClick={() => this.clickHandler(3)}>
                    <a href="#tab4">매도</a>
                  </li>
                  <li className="Order_tab" onClick={() => this.clickHandler(4)}>
                    <a href="#tab5">매수</a>
                  </li>
                </ul>
                <div className="Ordr_tab_items">
                 {obj[this.state.activeTab]}
                </div>
              </div>
              <Footer />
            </div>
          );
    }
}
