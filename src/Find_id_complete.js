import React from "react";
import "./Find_id_complete.css";
import Btn_navy from "./components/Btn_navy";
import Btn_gray from "./components/Btn_gray";
import Btn_default from "./components/Btn_default";
import Header_back from "./components/Header_back";

function Find_id_complete() {
  return (
    <div className="find_id_complete">
      <Header_back />
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
          <Btn_default blue />
          <Btn_default red />
        </div>
      </div>
      {/* contents : e */}
    </div>
  );
}

export default Find_id_complete;
