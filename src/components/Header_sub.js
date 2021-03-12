import React from "react";
import "./Header_sub.css";
import icon_back from "../img/right-arrow.png";

import { Routes, Link, Switch, Route, BrowserRouter } from "react-router-dom";

function Header_sub() {
  return (
    <div className="Header_sub">
      <div className="back_header">
        <div className="back_header_inner">
          <a href="/home" className="header_icon_item icon_back">
            <div className="icon_img">
              <img src={icon_back} />
            </div>
          </a>
          <select className="Header_sub_items">
            <option value="88(팔팔)">88(팔팔)</option>
            <option value="99(구구)">99(구구)</option>
          </select>
          <a href="/login" className="header_icon_item icon_alarm_white">
            <div className="icon_img"></div>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Header_sub;
