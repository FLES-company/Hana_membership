import React from "react";
import "./Find_auth.css";
import "./components/Guide_ui.css";
import icon_back from "./img/right-arrow.png";
import { Routes, Link, Switch, Route, BrowserRouter } from "react-router-dom";
import Btn_default from "./components/Btn_default";

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
        </div>
      </div>
      {/* back_header : e */}

      {/* contents : s */}
      <div className="find_auth_inner">
        <h1>아이디/비밀번호 찾기</h1>
        <form action="">
          {/* input_email */}
          <div className="input_email">
            <span>아이디</span>
            <div className="input_unit">
              <input type="text" placeholder="아이디" name="email" required />

              {/* 체크사항 */}
              {/* <span className="check_ok"></span> */}
            </div>
          </div>
          {/* input_name */}
          <div className="input_name">
            <span>이름</span>
            <div className="input_unit">
              <input
                type="text"
                placeholder="실명을 입력하세요"
                name="name"
                required
              />

              {/* 체크사항 */}
              {/* <span className="check_ok"></span> */}
            </div>
          </div>
          {/* input_number */}
          <div className="input_number">
            <span>휴대폰 번호 인증</span>
            <div className="input_wrap">
              <div className="input_unit">
                <input
                  type="text"
                  minlength={5}
                  placeholder="본인 명의 휴대폰 번호"
                  name="phoneNum"
                />
              </div>
              <button className="">인증번호 발송</button>

              {/* 체크사항 */}
              {/* <span className="check_fail"></span> */}
            </div>
            <div className="input_wrap">
              <div className="input_unit">
                <input
                  type="text"
                  minlength={5}
                  placeholder="인증번호 입력"
                  name="authNum"
                />
                <span className="timer">3:00</span>

                {/* 체크사항 */}
                {/* <span className="check_fail"></span> */}
              </div>
              <button className="">인증완료</button>
            </div>
          </div>
        </form>
        <Btn_default/>
        {/* 버튼 text '확인'으로 변경 필요 */}
      </div>
      {/* contents : e */}
    </div>
  );
}

export default Find_auth;
