import React, { Component, useState } from "react";
import "./Order.css";
import "./Tab2.css";
import icon_back from "./img/right-arrow.png";
import icon_favorites_cancle from "./img/icon_favorites_cancle.png";
import { Routes, Link, Switch, Route, BrowserRouter } from "react-router-dom";

import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";
import Tab4 from "./Tab4";
import Tab5 from "./Tab5";

//common component
import Header from "./components/Header";
import Gnb from "./components/Gnb";

// page
import Body from "./components/Body";
import Interest from "./Interest";
import Market from "./Market";

import Chart from "./Chart";
import History from "./History";
import Mypage from "./Mypage";

//image
import icon_f_off_1 from "./img/icon_f_off_1.png";
import icon_f_off_2 from "./img/icon_f_off_2.png";
import icon_f_off_3 from "./img/icon_f_off_3.png";
import icon_f_off_4 from "./img/icon_f_off_4.png";
import icon_f_off_5 from "./img/icon_f_off_5.png";
import icon_f_off_6 from "./img/icon_f_off_6.png";
import icon_f_on_1 from "./img/icon_f_on_1.png";
import icon_f_on_2 from "./img/icon_f_on_2.png";
import icon_f_on_3 from "./img/icon_f_on_3.png";
import icon_f_on_4 from "./img/icon_f_on_4.png";
import icon_f_on_5 from "./img/icon_f_on_5.png";
import icon_f_on_6 from "./img/icon_f_on_6.png";

import memberships from "./mock/membership_price.json";

const header_obj = {
  999: <Header />,
  0: "",
  1: ""
}

const obj = {
    999: '',
    0: <Interest />,
    1: <Market />,
    3: <Chart />,
    4: <History />,
    5: <Mypage />
};

const sub_obj = {
  0: <Tab1 />,
  1: <Tab2 />,
  2: <Tab3 />,
  3: <Tab4 />,
  4: <Tab5 />,
};


function Order () {
  const [ subtab, setSubtab ] = useState(0);
  const subClickHandler = (e) => {
    console.log("subtab : " + e.target.dataset.id);
    setSubtab(e.target.dataset.id);
  }

  const [ gnb, setGnb ] = useState(999);
  const [ header, setHeader ] = useState(999);
  const [ mainTab, setMainTab ] = useState(2);

  const ClickHandler = (e) => {
    setMainTab(e.target.dataset.id);
    if(e.target.dataset.id == 0){
      setGnb(0);
      setHeader(0);
    }else{
      setGnb(1);
      setHeader(1);
    }
  }
  const interest = JSON.parse( window.localStorage.getItem("interest") );
  // console.log("interest : " + interest);
  const selected_ms = memberships.filter(
    (ms) => ms.Membership_name == interest
  );
  const ms = selected_ms[0];

  return (
    <>
    <div className={mainTab == 2 ? 'Order Tab2' : 'Order Tab2 off'}>
      {/* back_header : s */}
      <div className="back_header">
        <div className="back_header_inner">
          <a href="/home" className="header_icon_item icon_back">
            <div className="icon_img">
              <img src={icon_back}/>
            </div>
          </a>
          <select className="Order_items">
            <option value={ms.Membership_name}>{ms.Membership_name}</option>
          </select>
          <a href="/login" className="header_icon_item icon_favorites">
            <div className="icon_img">
              <img src={icon_favorites_cancle} />
            </div>
          </a>
        </div>
      </div>
      {/* back_header : e */}
      <div className="Order_inner">
        <ul>
          <li className={subtab == 0 ? 'Order_tab on' : 'Order_tab'} onClick={subClickHandler} data-id="0">
            <span data-id="0">호가</span>
          </li>
          <li className={subtab== 1 ? 'Order_tab on' : 'Order_tab'} onClick={subClickHandler} data-id="1">
            <span data-id="1">차트</span>
          </li>
          <li className={subtab == 2 ? 'Order_tab on' : 'Order_tab'} onClick={subClickHandler} data-id="2">
            {/* <a href="/tab3">정보</a> */}
            <span data-id="2">정보</span>
          </li>
          <li className={subtab == 3 ? 'Order_tab on' : 'Order_tab'} onClick={subClickHandler} data-id="3">
            {/* <a href="/tab4">매도</a> */}
            <span data-id="3">매도</span>
          </li>
          <li className={subtab == 4 ? 'Order_tab on' : 'Order_tab'} onClick={subClickHandler} data-id="4">
            {/* <a href="/tab5">매수</a> */}
            <span data-id="4">매수</span>
          </li>
        </ul>
      </div>
      
      <div className="Order_contents">
          {/* 선택된 탭의 컴포넌트를 보여줌 */}
          { sub_obj[subtab] }
        </div>
    </div>
    
    { obj[mainTab] }
    <div className="footer">
      <div className="footer_inner">
        <ul>
          <li className={mainTab == 0 ? 'footer_inner_item on' : 'footer_inner_item'} onClick={ClickHandler} data-id="0">
            {/* Link태그 = a태그 */}
            <p data-id="0">
              <img data-id="0" src={mainTab == 0 ? icon_f_on_1 : icon_f_off_1}/>
              <span data-id="0">관심</span>
            </p>
          </li>
          <li className={mainTab == 1 ? 'footer_inner_item on' : 'footer_inner_item'} onClick={ClickHandler} data-id="1">
            <p data-id="1">
              <img data-id="1" src={mainTab == 1 ? icon_f_on_2 : icon_f_off_2} />
              <span data-id="1">시세</span>
            </p>
          </li>
          <li className={mainTab == 2 ? 'footer_inner_item on' : 'footer_inner_item'} onClick={ClickHandler} data-id="2">
            <p data-id="2">
              <img data-id="2" src={mainTab == 2 ? icon_f_on_3 : icon_f_off_3} />
              <span data-id="2">주문</span>
            </p>
          </li>
          <li className={mainTab == 3 ? 'footer_inner_item on' : 'footer_inner_item'} onClick={ClickHandler} data-id="3">
            <p data-id="3">
              <img data-id="3" src={mainTab == 3 ? icon_f_on_4 : icon_f_off_4}  />
              <span data-id="3">차트</span>
            </p>
          </li>
          <li className={mainTab == 4 ? 'footer_inner_item on' : 'footer_inner_item'} onClick={ClickHandler} data-id="4">
            <p data-id="4">
              <img data-id="4" src={mainTab == 4 ? icon_f_on_5 : icon_f_off_5}  />
              <span data-id="4">내역</span>
            </p>
          </li>
          <li className={mainTab == 5 ? 'footer_inner_item on' : 'footer_inner_item'} onClick={ClickHandler} data-id="5">
            <p data-id="5">
              <img data-id="5" src={mainTab == 5 ? icon_f_on_6 : icon_f_off_6}  />
              <span data-id="5">정보</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
    </>
  );
};

export default Order;