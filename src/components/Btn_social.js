import React from "react";
import "./Btn_social.css";

import icon_social_f from "../img/icon_social_f.png";
import icon_social_k from "../img/icon_social_k.png";
import icon_social_n from "../img/icon_social_n.png";

function Btn_social() {
  return (
    <div className="Btn_social">
      <h1>소셜 간편 로그인</h1>
      <div className="Btn_social_inner">
        <button>
          <div className="iconImg"><img src={icon_social_n} /></div>
          <span>네이버로 로그인</span>
        </button>
        <button>
          <div className="iconImg"><img src={icon_social_k} /></div>
          <span>카카오로 로그인</span>
        </button>
        <button>
          <div className="iconImg"><img src={icon_social_f} /></div>
          <span>페이스북으로 로그인</span>
        </button>
      </div>
    </div>
  );
}

export default Btn_social;
