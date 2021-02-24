import React from "react";
import "./Find_pw_reset.css";
import icon_back from "./img/right-arrow.png";
import icon_home from "./img/icon_home.png";
import { Routes, Link, Switch, Route, BrowserRouter } from "react-router-dom";

function Find_pw_reset() {
  return (
    <div className="find_pw_reset">
      {/* back_header : s */}
      <div className="back_header">
        <div className="back_header_inner">
          <a href="/login" className="header_icon_item icon_back">
            <div className="icon_img">
              <img src={icon_back} Link to="/login" />
            </div>
          </a>
          <h1>비밀번호 재설정</h1>
          <a href="/" className="header_icon_item icon_home">
            <img src={icon_home} Link to="/" />
          </a>
        </div>
      </div>
      {/* back_header : e */}

      {/* contents : s */}
      <div className="find_pw_reset_inner">
        <div className="inner_content_text">
          안녕하세요, <span className="user_name">홍길동</span>님!
          <br />
          인증이 완료되어 비밀번호를 새로 설정합니다.
          <br />
          비밀번호를 잊어버리지 않게 주의하세요!
        </div>
        <div className="inner_content_input">
          <span>새 비밀번호</span>
          <input type="text" placeholder="비밀번호" />
          <input type="text" placeholder="비밀번호 재입력" />
        </div>
        <button type="button">비밀번호 변경 후 로그인</button>
      </div>
      {/* contents : e */}
    </div>
  );
}

export default Find_pw_reset;
