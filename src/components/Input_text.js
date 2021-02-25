import React from "react";
import "./Input_text.css";
import icon_back from "../img/right-arrow.png";
import { Routes, Link, Switch, Route, BrowserRouter } from "react-router-dom";

import Login_btn from "./Login_button";
import Signup_btn from "./SignUp_button";
import Social_login_btn from "./Social_login_button";
import Social_login_btn_2 from "./Social_login_button_2";

function Input_text() {
  return (
    <div className="Input_text">
      {/* back_header : s */}
      <div className="back_header">
        <div className="back_header_inner">
          <a href="/loginMain" className="header_icon_item icon_back">
            <div className="icon_img">
              <img hidden src={icon_back} Link to="/loginMain" />
            </div>
          </a>
          <h1>로그인</h1>
        </div>
      </div>
      {/* back_header : e */}

      <form>
        <ul>
          <li>
            <span>이메일</span>
            <input name="email" type="text" placeholder="이메일" required />
          </li>
          <li>
            <span>비밀번호</span>
            <input name="psw" type="password" placeholder="비밀번호를 입력해주세요." required />
          </li>
        </ul>

        <Link to="/find">
          <button>아이디 / 비밀번호 찾기</button>
        </Link>
        <Login_btn />
        <Signup_btn />
        <Social_login_btn />
      </form>
    </div>
  );
}

export default Input_text;
