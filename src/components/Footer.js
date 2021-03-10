import React from "react";
import "./Footer.css";
import { Routes, Link, Switch, Route, BrowserRouter } from "react-router-dom";

import icon_f_off_1 from "../img/icon_f_off_1.png";
import icon_f_off_2 from "../img/icon_f_off_2.png";
import icon_f_off_3 from "../img/icon_f_off_3.png";
import icon_f_off_4 from "../img/icon_f_off_4.png";
import icon_f_off_5 from "../img/icon_f_off_5.png";
import icon_f_off_6 from "../img/icon_f_off_6.png";
import icon_f_on_1 from "../img/icon_f_on_1.png";
import icon_f_on_2 from "../img/icon_f_on_2.png";
import icon_f_on_3 from "../img/icon_f_on_3.png";
import icon_f_on_4 from "../img/icon_f_on_4.png";
import icon_f_on_5 from "../img/icon_f_on_5.png";
import icon_f_on_6 from "../img/icon_f_on_6.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_inner">
        <ul>
          <li className="footer_inner_item on">
            {/* Link태그 = a태그 */}
            <Link to="/interest">
              <img src={icon_f_on_1} />
              <span>관심</span>
            </Link>
          </li>
          <li className="footer_inner_item">
            <Link to="/market">
              <img src={icon_f_off_2} />
              <span>시세</span>
            </Link>
          </li>
          <li className="footer_inner_item">
            <Link to="/order">
              <img src={icon_f_off_3} />
              <span>주문</span>
            </Link>
          </li>
          <li className="footer_inner_item">
            <Link to="/tab2">
              <img src={icon_f_off_4} />
              <span>차트</span>
            </Link>
          </li>
          <li className="footer_inner_item">
            <Link to="/history">
              <img src={icon_f_off_5} />
              <span>내역</span>
            </Link>
          </li>
          <li className="footer_inner_item">
            <Link to="/mypage">
              <img src={icon_f_off_6} />
              <span>정보</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
