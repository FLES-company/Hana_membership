import React from "react";
import "./History.css";
import icon_back from "./img/right-arrow.png";
import icon_favorites from "./img/icon_favorites.png";
import icon_history_new from "./img/icon_history_new.png";
import icon_history_soon from "./img/icon_history_soon.png";
import Btn_navy from "./components/Btn_navy";

function History() {
  return (
    <div className="History">
      {/* back_header : s */}
      <div className="back_header">
        <div className="back_header_inner">
          <a href="/login" className="header_icon_item icon_back">
            <div className="icon_img">
              <img src={icon_back} Link to="/login" />
            </div>
          </a>
          <h1>회원권 거래내역</h1>
          <a href="/login" className="header_icon_item icon_favorites">
            <div className="icon_img">
              <img src={icon_favorites} Link to="/login" />
            </div>
          </a>
        </div>
      </div>
      {/* back_header : e */}
      {/* 거래내역 : s */}
      <div className="History_contents">
        <div className="content_monthly">
          <div className="month">
            <span>1월</span>
          </div>
          <ul>
            <li className="item">
              <span className="date">2021년 2월 1일</span>
              <div className="icon_product">
                <img className="new" src={icon_history_new} alt="신" />
                <p className="product">베이사이드(프리미어)</p>
              </div>
              <div className="info">
                <p className="amount">
                  <span>1</span>개
                  <span className="conclusion buy"> 매수체결</span>
                </p>
                <p className="price">
                  <span>21,000</span> 원
                </p>
              </div>
            </li>
            <li className="item">
              <span className="date">2021년 2월 1일</span>
              <div className="icon_product">
                <img className="soon" src={icon_history_soon} alt="신" />
                <p className="product">베이사이드(프리미어)</p>
              </div>
              <div className="info">
                <p className="amount">
                  <span>1</span>개
                  <span className="conclusion sell"> 매수체결</span>
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
      <div className="History_contents empty">
        <h2>회원권 거래내역이 없습니다.</h2>
        <p>주문을 통해 회원권을 거래해보세요.</p>
        <Btn_navy text="주문하러 가기"/>
      </div>
      {/* 거래내역없음 empty : e */}
    </div>
  );
}
export default History;
