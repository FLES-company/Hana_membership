import React from "react";
import "./Login_main.css";
import icon_close from "./img/times-light-w.png";
import bg_loginMain from "./img/bg_loginMain.jpg";
import { Routes, Link, Switch, Route, BrowserRouter } from "react-router-dom";
import Btn_social_bg from "./components/Btn_social_bg";

function Login_main() {
  return (
    <div className="Login_main">
      {/* back_header : s */}
      <div className="back_header">
        <div className="back_header_inner">
          <a href="/" className="header_icon_item icon_close">
            <div className="icon_img">
              <img src={icon_close} Link to="/" />
            </div>
          </a>
          <h1 hidden>로그인메인 페이지</h1>
        </div>
      </div>
      {/* back_header : e */}

      <div className="Login_main_inner">
        <div className="Login_main_inner_text">
          <p>국내외 통합<br/> 회원권 거래소</p>
        </div>
        <Btn_social_bg />
      </div>
    </div>
  );
}

export default Login_main;
