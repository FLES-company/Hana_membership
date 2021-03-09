import React from "react";
import "./Find_id_complete.css";
import Btn_navy from "./components/Btn_navy";
import Btn_gray from "./components/Btn_gray";
import Header_back from "./components/Header_back";
import { Routes, Link, Switch, Route, BrowserRouter } from "react-router-dom";

function Find_id_complete() {
  return (
    <div className="Find_id_complete">
      <Header_back />
      {/* contents : s */}
      <div className="Find_id_complete_inner">
        <h1>아이디 찾기 완료</h1>
        <div className="inner_content_text">
          안녕하세요, <span className="user_name">홍길동</span>님! <br />
          찾으시려는 이메일 주소는 아래와 같습니다.
        </div>
        <div className="inner_content_email">
          <span className="user_email">dfd11**@naver.com</span>
        </div>
        <div className="inner_content_btns">
          <Link to="/login">
            <Btn_navy text="로그인하러 가기" />
          </Link>
          <Link to="/find">
            <Btn_gray text="비밀번호 찾기" />
          </Link>
        </div>
      </div>
      {/* contents : e */}
    </div>
  );
}

export default Find_id_complete;
