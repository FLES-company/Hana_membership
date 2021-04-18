import React from "react";
import "./History.css";
import icon_back from "./img/right-arrow.png";
import icon_favorites from "./img/icon_favorites.png";
import icon_history_new from "./img/icon_history_new.png";
import icon_history_soon from "./img/icon_history_soon.png";
import Btn_navy from "./components/Btn_navy";
import { Routes, Link, Switch, Route, BrowserRouter } from "react-router-dom";


function History() {
  const buy = JSON.parse( window.localStorage.getItem("buy") );
  const sell = JSON.parse( window.localStorage.getItem("sell") );
  console.log( "buy : " + buy + "/ sell : " + sell );
  return (
    <div className="History">
      {/* back_header : s */}
      <div className="back_header">
        <div className="back_header_inner">
          <Link to="/login" className="header_icon_item icon_back">
            <div className="icon_img">
              <img src={icon_back} hidden/>
            </div>
          </Link>
          <h1>회원권 거래내역</h1>
          <Link to="/login" className="header_icon_item icon_favorites">
            <div className="icon_img">
              <img src={icon_favorites} hidden/>
            </div>
          </Link>
        </div>
      </div>
      {/* back_header : e */}
      {/* 거래내역 : s */}
      <div className="History_contents">
        <div className="content_monthly">
          <div className="month">
            <span>4월</span>
          </div>
          <ul>
            <li className={buy != null ? 'item on' : 'item'}>
              <span className="date">2021년 4월</span>
              <div className="icon_product">
                <img className="new" src={icon_history_new} alt="신" />
                <p className="product">골든베이</p>
              </div>
              <div className="info">
                <p className="amount">
                  <span>1</span>개
                  <span className="conclusion buy"> 매수신청</span>
                </p>
                <p className="price">
                  <span>21,000</span> 원
                </p>
              </div>
            </li>
            <li className={sell != null ? 'item on' : 'item'}>
              <span className="date">2021년 4월</span>
              <div className="icon_product">
                <img className="soon" src={icon_history_soon} alt="신" />
                <p className="product">골든베이</p>
              </div>
              <div className="info">
                <p className="amount">
                  <span>1</span>개
                  <span className="conclusion sell"> 매도신청</span>
                </p>
                <p className="price">
                  <span>21,000</span> 원
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* 거래내역 : e */}
      {/* 거래내역없음 empty : s */}
      <div className={buy != null || sell != null ? 'History_contents empty' : 'History_contents empty on'}>
        <h2>회원권 거래내역이 없습니다.</h2>
        <p>주문을 통해 회원권을 거래해보세요.</p>
        <Btn_navy text="주문하러 가기" />
      </div>
      {/* 거래내역없음 empty : e */}
    </div>
  );
}
export default History;
