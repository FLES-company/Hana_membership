import React from "react";
import "./Find_auth.css";
import "./components/Guide_ui.css";
import Header_back from "./components/Header_back";
import Btn_gray from "./components/Btn_gray";
import { Routes, Link, Switch, Route, BrowserRouter } from "react-router-dom";


function Find_auth() {
  return (
    <div className="Find_auth checkAll">
      <Header_back />

      {/* contents : s */}
      <div className="Find_auth_inner">
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
              <button className="on">인증번호 발송</button>

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
              <button className="on">인증완료</button>
            </div>
          </div>
        </form>
        <div className="footer_fixed">
          {/* 버튼 text '확인'으로 변경 필요 */}
          <Link to="/findidComplete">
            <Btn_gray text="확인" />
          </Link>
        </div>
      </div>
      {/* contents : e */}
    </div>
  );
}

export default Find_auth;
