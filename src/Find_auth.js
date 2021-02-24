import React from "react";
import "./Find_auth.css";
import icon_back from "./img/right-arrow.png";
import { Routes, Link, Switch, Route, BrowserRouter } from "react-router-dom";

function Find_auth() {
  return (
    <div className="find_auth">
      {/* back_header : s */}
      <div className="back_header">
        <div className="back_header_inner">
          <a href="/login" className="header_icon_item icon_back">
            <div className="icon_img">
              <img src={icon_back} Link to="/login" />
            </div>
          </a>
          <h1>아이디/비밀번호 찾기</h1>
          <button type="button">확인</button>
        </div>
      </div>
      {/* back_header : e */}

      {/* contents : s */}
      <div className="find_auth_inner">
        <div className="find_auth_item input_id">
          <span>아이디</span>
          <input type="text" placeholder="이메일 아이디 입력" />
        </div>
        <div className="find_auth_item input_name">
          <span>이름</span>
          <input type="text" placeholder="실명을 입력하세요." />
        </div>
        <div className="find_auth_item input_number">
          <span>휴대폰 번호 인증</span>
          <div className="input_number_item input_number_phone">
            <input type="text" placeholder="본인 명의 휴대폰 번호" />
            <button>인증번호 발송</button>
          </div>
          <div className="input_number_item input_number_auth">
            <input type="text" placeholder="인증번호 입력" />
            <span className="timer">3:00</span>
            <button>인증완료</button>
            <span className="auth_fail">인증번호가 일치하지 않습니다.</span>
          </div>
        </div>
      </div>
      {/* contents : e */}
    </div>
  );
}

export default Find_auth;
