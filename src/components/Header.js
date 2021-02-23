import React from "react";
import logo from "../img/BI.png";
import icon_alarm from "../img/icon_alarm.png";
import icon_home from "../img/icon_home.png";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header_inner">
        <a href="#" className="header_logo">
          <div className="header_logo_item">
            <img src={logo} />
          </div>
          <h1>HANA</h1>
        </a>
        <div className="header_icon">
          <a href="#" className="header_icon_item icon_alarm">
            <div className="icon_img">
              <img src={icon_alarm} />
            </div>
            <p className="icon_tit">알림</p>
          </a>
          <a href="#" className="header_icon_item icon_home">
            <div className="icon_img">
              <img src={icon_home} />
            </div>
            <p className="icon_tit">홈</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
