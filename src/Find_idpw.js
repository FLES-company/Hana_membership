import React from "react";
import "./Find_idpw.css";
import icon_back from "./img/right-arrow.png";
import Btn_default from "./components/Btn_default";
import { Routes, Link, Switch, Route, BrowserRouter } from "react-router-dom";

function Find_idpw() {
  return (
    <div className="find_idpw">
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
      <div className="find_idpw_inner">
        <h1>아이디/비밀번호 찾기</h1>
        <h3>회원님께서 필요하신 사항을 선택해주세요</h3>

        {/* 아이디찾기, 비밀번호 찾기 함수로 value값 바꾸기 */}
        <div className="find_idpw_wrap">
          <Link to="/findAuth">
            <Btn_default />
          </Link>

          <Link to="/findAuth">
            <Btn_default />
          </Link>
        </div>
      </div>
      {/* contents : e */}
    </div>
  );
}

export default Find_idpw;
