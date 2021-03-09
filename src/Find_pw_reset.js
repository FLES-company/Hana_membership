import React from "react";
import "./Find_pw_reset.css";
import "./components/Guide_ui.css";
import Header_back from "./components/Header_back";
import Btn_gray from "./components/Btn_gray";
import { Routes, Link, Switch, Route, BrowserRouter } from "react-router-dom";

function Find_pw_reset() {
  return (
    <div className="Find_pw_reset checkAll">
      <Header_back />

      {/* contents : s */}
      <div className="Find_pw_reset_inner">
        <h1>비밀번호 재설정</h1>
        <div className="inner_content_text">
          안녕하세요, <span className="user_name">홍길동</span>님!
          <br />
          인증이 완료되어 비밀번호를 새로 설정합니다.
          <br />
          비밀번호를 잊어버리지 않게 주의하세요!
        </div>
        <div className="inner_content_input">
          <form action="">
            {/* input_password */}
            <div className="input_password">
              <span>새 비밀번호</span>
              <div className="input_unit check_ok">
                <input
                  type="password"
                  minlength={5}
                  placeholder="비밀번호를 입력해주세요."
                  name="password"
                  required
                />
              </div>
              <div className="input_unit check_fail">
                <input
                  type="password"
                  minlength={5}
                  placeholder="비밀번호를 다시 한번 입력해주세요."
                  name="password-repeat"
                  required
                />
              </div>
            </div>
          </form>
        </div>
        <div className="footer_fixed">
          {/* 버튼 text 변경 필요 */}
          <Link to="/">
            <Btn_gray text="비밀번호 변경 후 로그인" />
          </Link>
        </div>
      </div>
      {/* contents : e */}
    </div>
  );
}

export default Find_pw_reset;
