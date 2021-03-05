import React from "react";
import "./Find_idpw.css";
import Header_back from "./components/Header_back";
import Btn_navy from "./components/Btn_navy";
import { Routes, Link, Switch, Route, BrowserRouter } from "react-router-dom";

function Find_idpw() {
  return (
    <div className="find_idpw">
      <Header_back />

      {/* contents : s */}
      <div className="find_idpw_inner">
        <h1>아이디/비밀번호 찾기</h1>
        <h3>회원님께서 필요하신 사항을 선택해주세요</h3>

        {/* 아이디찾기, 비밀번호 찾기 함수로 value값 바꾸기 */}
        <div className="find_idpw_wrap">
          {/* <Link to="/findAuth"> */}
          <Btn_navy />
          {/* </Link> */}

          <Link to="/findAuth">
            <Btn_navy />
          </Link>
        </div>
      </div>
      {/* contents : e */}
    </div>
  );
}

export default Find_idpw;
