import React from "react";
import "./Header_back.css";
import icon_back from "../img/right-arrow.png";
import icon_home from "../img/icon_home.png";

function Header_back() {
  return (
    <div className="Header_back">
      <div className="back_header">
        <div className="back_header_inner">
          <a href="/login" className="header_icon_item icon_back">
            <div className="icon_img">
              <img src={icon_back} Link to="/login" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Header_back;
