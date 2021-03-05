import React from "react";
import "./Find_id_complete.css";
import icon_back from "./img/right-arrow.png";
import icon_home from "./img/icon_home.png";
import { Routes, Link, Switch, Route, BrowserRouter } from "react-router-dom";
import Btn_navy from "./components/Btn_navy";
import Btn_gray from "./components/Btn_gray";

function Find_id_complete() {
  return (
    <div className="find_id_complete">
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
      <div className="find_id_complete_inner">
        <h1>아이디 찾기 완료</h1>
        <div className="inner_content_text">
          안녕하세요, <span className="user_name">홍길동</span>님! <br />
          찾으시려는 이메일 주소는 아래와 같습니다.
        </div>
        <div className="inner_content_email">
          <span className="user_email">dfd11**@naver.com</span>
        </div>
        <div className="inner_content_btns">
          <Btn_navy />
          <Btn_gray border />
        </div>
      </div>
      {/* contents : e */}
    </div>
  );
}

export default Find_id_complete;
