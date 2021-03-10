import React, {useState} from "react";
import "./Footer.css";
import { Routes, Link, Switch, Route, BrowserRouter } from "react-router-dom";

import Body from "./Body";
import Interest from "../Interest";
import Market from "../Market";
import Order from "../Order";
import Tab2 from "../Tab2";
import History from "../History";
import Mypage from "../Mypage";


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

const obj = {
  999: <Body />,
  0: <Interest />,
  1: <Market />,
  2: <Order />,
  3: <Tab2 />,
  4: <History />,
  5: <Mypage />
};

function Footer() {
  const [ footerTab, setFooterTab ] = useState(999);
  const ClickHandler = (e) => {
    setFooterTab(e.target.dataset.id);
  }
  return (
    <>
      { obj[footerTab] }
      <div className="footer">
        <div className="footer_inner">
          <ul>
            <li className={footerTab == 0 ? 'footer_inner_item on' : 'footer_inner_item'} onClick={ClickHandler} data-id="0">
              {/* Link태그 = a태그 */}
              <p data-id="0">
                <img data-id="0" src={footerTab == 0 ? icon_f_on_1 : icon_f_off_1}/>
                <span data-id="0">관심</span>
              </p>
            </li>
            <li className={footerTab == 1 ? 'footer_inner_item on' : 'footer_inner_item'} onClick={ClickHandler} data-id="1">
              <p data-id="1">
                <img data-id="1" src={footerTab == 1 ? icon_f_on_2 : icon_f_off_2} />
                <span data-id="1">시세</span>
              </p>
            </li>
            <li className={footerTab == 2 ? 'footer_inner_item on' : 'footer_inner_item'} onClick={ClickHandler} data-id="2">
              <p data-id="2">
                <img data-id="2" src={footerTab == 2 ? icon_f_on_3 : icon_f_off_3}  />
                <span data-id="2">주문</span>
              </p>
            </li>
            <li className={footerTab == 3 ? 'footer_inner_item on' : 'footer_inner_item'} onClick={ClickHandler} data-id="3">
              <p data-id="3">
                <img data-id="3" src={footerTab == 3 ? icon_f_on_4 : icon_f_off_4}  />
                <span data-id="3">차트</span>
              </p>
            </li>
            <li className={footerTab == 4 ? 'footer_inner_item on' : 'footer_inner_item'} onClick={ClickHandler} data-id="4">
              <p data-id="4">
                <img data-id="4" src={footerTab == 4 ? icon_f_on_5 : icon_f_off_5}  />
                <span data-id="4">내역</span>
              </p>
            </li>
            <li className={footerTab == 5 ? 'footer_inner_item on' : 'footer_inner_item'} onClick={ClickHandler} data-id="5">
              <p data-id="5">
                <img data-id="5" src={footerTab == 5 ? icon_f_on_6 : icon_f_off_6}  />
                <span data-id="5">정보</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
