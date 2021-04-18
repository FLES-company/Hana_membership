import React from "react";
import "./Header_sub.css";

const Header_sub =  ( { title }) => {
  const interest = JSON.parse( window.localStorage.getItem("interestId") );
  if( title == 'interest' ){
    title = "관심회원권";
  }
  return (
    <div className="Header_sub">
      <div className="back_header">
        <div className="back_header_inner">
          <a href="/home" className="header_icon_item icon_back">
            <div className="icon_img"></div>
          </a>
          <div className={interest != null ? 'header_title' : 'header_title on'}>
            { title }
          </div>
          <select className={interest != null ? 'Header_sub_items on' : 'Header_sub_items'}>
            <option value="88(팔팔)">88(팔팔)</option>
            <option value="99(구구)">99(구구)</option>
          </select>
          <a href="/search" className="header_icon_item icon_alarm_white">
            <div className="icon_img"></div>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Header_sub;
