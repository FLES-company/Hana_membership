import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_inner">
        <ul>
          <li className="footer_inner_item">
            <a href="#">관심회원권</a>
          </li>
          <li className="footer_inner_item">
            <a href="#">회원권시세</a>
          </li>
          <li className="footer_inner_item">
            <a href="#">주문</a>
          </li>
          <li className="footer_inner_item">
            <a href="#">차트</a>
          </li>
          <li className="footer_inner_item">
            <a href="#">거래내역</a>
          </li>
          <li className="footer_inner_item">
            <a href="#">내 정보</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
