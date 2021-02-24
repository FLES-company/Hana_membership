import React from "react";
import "./Find_id_complete.css";
import icon_back from "./img/right-arrow.png";
import icon_home from "./img/icon_home.png";
import { Routes, Link, Switch, Route, BrowserRouter } from "react-router-dom";

function Find_id_complete() {
  return (
    <div className="find_id_complete">
      {/* back_header : s */}
      <div className="back_header">
        <div className="back_header_inner">
          <a href="/login" className="header_icon_item icon_back">
            <div className="icon_img">
              <img src={icon_back} Link to="/login" />
            </div>
          </a>
          <h1>아이디 찾기 완료</h1>
          <a href="/" className="header_icon_item icon_home">
            <img src={icon_home} Link to="/" />
          </a>
        </div>
      </div>
      {/* back_header : e */}

      {/* contents : s */}
      <div className="find_id_complete_inner">
        <div className="inner_content_text">
          안녕하세요,<span className="user_name">홍길동</span>님! <br />
          찾으시려는 이메일 주소는<br />
          <span className="user_email">dfd11**@naver.com</span>입니다.
        </div>
        <div className="inner_content_btns">
          <button type="button" className="passwordBtn">
            비밀번호 찾기
          </button>
          <button type="button" className="loginBtn">
            로그인
          </button>
        </div>
      </div>
      {/* contents : e */}
    </div>
  );
}

export default Find_id_complete;
