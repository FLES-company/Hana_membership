import React from "react";
import "./Btn_social_bg.css";
import { Routes, Link, Switch, Route, BrowserRouter } from "react-router-dom";
import BI_text_g from "../img/BI_text_g.png";
import icon_naver from "../img/icon_naver.png";
import icon_kakao from "../img/icon_kakao.png";
import icon_face from "../img/icon_face.png";
import icon_email from "../img/icon_email.png";

function Btn_social_bg() {
  return (
    <div className="Btn_social_bg">
      <div className="Btn_social_bg_inner">
        <img className="BI_text_g" src={BI_text_g} />
        <h1>소셜 간편 로그인</h1>

        <button className="btn_item icon_naver">
          <div className="iconImg">
            <img src={icon_naver} />
          </div>
          <span>네이버로 로그인</span>
        </button>
        <button className="btn_item icon_kakao">
          <div className="iconImg">
            <img src={icon_kakao} />
          </div>
          <span>카카오로 로그인</span>
        </button>
        <button className="btn_item icon_face">
          <div className="iconImg">
            <img src={icon_face} />
          </div>
          <span>페이스북으로 로그인</span>
        </button>
        <Link to="/login">
          <button className="btn_item icon_email">
            <div className="iconImg">
              <img src={icon_email} />
            </div>
            <span>이메일로 로그인</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Btn_social_bg;
