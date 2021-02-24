import React from "react";
import "./Social_login_button.css";

import icon_social_f from "../img/icon_social_f.png";
import icon_social_k from "../img/icon_social_k.png";
import icon_social_n from "../img/icon_social_n.png";

function Social_login_btn() {
  return (
    <div className="Social_login_btn">
      <div className="Social_login_btn_inner">
        <button className="">
          <img src={icon_social_n} />
        </button>
        <button className="">
          <img src={icon_social_k} />
        </button>
        <button className="">
          <img src={icon_social_f} />
        </button>
      </div>
    </div>
  );
}

export default Social_login_btn;
