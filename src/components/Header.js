import React from "react";
import logo from "../img/BI.png";
import icon_alarm from "../img/icon_alarm.png";
import icon_home from "../img/icon_home.png";
import "./Header.css";
import { Routes, Link, Switch, Route, BrowserRouter } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header_inner">
        {/* logo */}
        <Link to="/" className="header_icon_item header_logo">
          <div className="header_logo_item">
            <img src={logo} />
          </div>
          <h1 hidden>HANA</h1>
        </Link>
        {/* icon_alarm */}
        <Link to="/notice" className="header_icon_item">
          <div className="icon_img onAlarm">
            <img src={icon_alarm} />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
