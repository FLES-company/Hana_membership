import React from "react";
import "./SignUp.css";
import icon_back from "./img/right-arrow.png";
import { Routes, Link, Switch, Route, BrowserRouter } from "react-router-dom";
import Signup_btn from "./components/SignUp_button";

function SignUp() {
  return (
    <div className="SignUp">
      {/* back_header : s */}
      <div className="back_header">
        <div className="back_header_inner">
          <a href="/login" className="header_icon_item icon_back">
            <div className="icon_img">
              <img src={icon_back} Link to="/login" />
            </div>
          </a>
          <h1>회원가입</h1>
        </div>
      </div>
      {/* back_header : e */}

      <div className="SinUp_inner">
        <form>
          {/* input_email */}
          <div className="SinUp_inner_item input_email">
            <label htmlFor="email">
              <span>이메일</span>
            </label>
            <input name="email" type="text" placeholder="이메일" required />
          </div>
          {/* input_password */}
          <div className="SinUp_inner_item input_password">
            <label htmlFor="psw">
              <span>비밀번호</span>
            </label>
            <input name="psw" type="password" placeholder="비밀번호" required />
            <label htmlFor="psw-repeat" hidden>
              <span>비밀번호 재입력</span>
            </label>
            <input
              name="psw-repeat"
              type="password"
              placeholder="비밀번호 재입력"
              required
            />
            <span className="check_text">사용가능한 닉네임 입니다.</span>
          </div>
          {/* radio_group */}
          <ul className="SinUp_inner_item radio_group">
            <li>
              <input type="radio" id="check_all" />
              <label htmlFor="check_all">모두 동의합니다.</label>
            </li>
            <li>
              <ul>
                <li>
                  <input type="radio" id="check_1" className="normal" />
                  <label htmlFor="check_1">이용약관 필수 동의</label>
                  <button>보기 &gt;</button>
                </li>

                <li>
                  <input type="radio" id="check_2" className="normal" />
                  <label htmlFor="check_2">개인정보 처리방침 필수 동의</label>
                  <button>보기 &gt;</button>
                </li>

                <li>
                  <input type="radio" id="check_3" className="normal" />
                  <label htmlFor="check_3">
                    쿠폰 / 이벤트 알림 선택 동의
                    <p>
                      SMS, 이메일을 통해 파격할인/이벤트/쿠폰 정보를 받아보실 수
                      있습니다.
                    </p>
                  </label>
                  <button>보기 &gt;</button>
                </li>
              </ul>
            </li>
          </ul>
          <Signup_btn />
        </form>
      </div>
    </div>
  );
}

export default SignUp;
