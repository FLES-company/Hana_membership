import React from "react";
import "./SignUp_complete.css";
import "./components/Guide_ui.css";
import icon_complete from "./img/icon_complete.png";
import { Routes, Link, Switch, Route, BrowserRouter } from "react-router-dom";
import Btn_navy from "./components/Btn_navy";

function SignUp_complete() {
  return (
    <div className="SignUp_complete">
      <div className="SignUp_complete_inner">
        <div className="icon_img">
          <img src={icon_complete} />
        </div>
        <h1>회원가입 완료</h1>
        <h2>
          하나회원권거래소 회원가입 완료
          <br /> 홍길동님, 반갑습니다!
        </h2>
      </div>
      <div className="footer_fixed">
        <Link to="/">
          <Btn_navy text="이용하러 가기"/>
        </Link>
      </div>
    </div>
  );
}
export default SignUp_complete;
