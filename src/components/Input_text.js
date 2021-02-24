import React from "react";
import "./Input_text.css";
import icon_back from "../img/right-arrow.png";
import { Routes, Link, Switch, Route, BrowserRouter } from "react-router-dom";

import Login_btn from "./Login_button";
import Signup_btn from "./SignUp_button";
import Social_login_btn from "./Social_login_button";

function Input_text() {
  return (
    <div className="Input_text">
      {/* back_header : s */}
      <div className="back_header">
        <div className="back_header_inner">
          <a href="/input" className="header_icon_item icon_back">
            <div className="icon_img">
              <img src={icon_back} Link to="/input" />
            </div>
          </a>
          <h1>로그인</h1>
        </div>
      </div>
      {/* back_header : e */}

      <form className="">
        <input
          className=""
          id="standard-basic"
          label="이메일"
          placeholder="이메일"
        />
        <input
          className=""
          id="standard-basic"
          label="비밀번호"
          placeholder="비밀번호"
        />
        <Link to="/find">
          <button>아이디 / 비밀번호 찾기</button>
        </Link>
      </form>
      <Login_btn />
      <Signup_btn />
      <Social_login_btn />
    </div>
  );
}

export default Input_text;
