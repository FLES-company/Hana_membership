import React from "react";
import "./Social_login_button_2.css";
import { Routes, Link, Switch, Route, BrowserRouter } from "react-router-dom";

import icon_naver from "../img/icon_naver.png";
import icon_kakao from "../img/icon_kakao.png";
import icon_face from "../img/icon_face.png";
import icon_email from "../img/icon_email.png";

function Social_login_btn_2() {
  return (
    <div className="Social_login_btn_2">
      <div className="Social_login_btn_2_inner">
        <button className="btn_item icon_naver">
          <img src={icon_naver} />
          <span>네이버로 로그인</span>
        </button>
        <button className="btn_item icon_kakao">
          <img src={icon_kakao} />
          <span>카카오로 로그인</span>
        </button>
        <button className="btn_item icon_face">
          <img src={icon_face} />
          <span>페이스북으로 로그인</span>
        </button>
        <Link to="/login">
          <button className="btn_item icon_email">
            <img src={icon_email} />
            <span>이메일로 로그인</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Social_login_btn_2;
