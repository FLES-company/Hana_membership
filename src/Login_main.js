import React from "react";
import "./Login_main.css";
import icon_close from "./img/times-light.png";
import { Routes, Link, Switch, Route, BrowserRouter } from "react-router-dom";

import Social_login_btn_2 from "./components/Social_login_button_2";

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
          국내외 통합 회원권 거래소
          <br /> 하나회원권거래소
        </div>
        <Social_login_btn_2 />
      </div>
    </div>
  );
}

export default Login_main;
