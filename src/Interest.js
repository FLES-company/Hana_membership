import React, { useState } from "react";
import "./Interest.css";
import memberships from "./mock/membership_price.json";
import Header_sub from "./components/Header_sub";

function Interest({Membership_name, Current_price, Base_price, Total_transactions}) {
  const interest = JSON.parse( window.localStorage.getItem("interest") );
  // console.log("interest : " + interest);
  const selected_ms = memberships.filter(
    (ms) => ms.Membership_name == interest
  );
  const ms = selected_ms[0];

  const [modalData, setModalData] = useState(false);
  const [modalState, setModalState] = useState(false);
  const openModal = (e) => {
    setModalData(ms);
    setModalState(true);
  };
  const closeModal = (e) => {
    if(e.target === e.currentTarget){
      setModalState(false);
    };
  };
  const OrderStart = (e) => {
    window.location.href="../order";
  }

  return (
    <div className="Interest">
      <Header_sub title="interest"/>
      {/* 본 컨텐츠 : s */}
      <div className={interest != null ? 'Interest_contents on' : 'Interest_contents'}>
        <table>
          <caption hidden>관심회원권</caption>
          <thead>
            <tr>
              <th className="productName">회원권명</th>
              <th className="price">현재가</th>
              <th className="info_compared">전일대비</th>
              <th className="regi_quantity">등록량</th>
            </tr>
          </thead>
          <tbody>
            <tr
                onClick={openModal}
                data-price={ms.Current_price}
              >
                <th className="productName">{ms.Membership_name}</th>
                <th className="price">{ms.Current_price}</th>
                <th
                  className="info_compared up"
                >
                  {ms.Base_price}
                  <br />
                  <span className="percent">
                    ({Math.round(Math.random() * 20)}%)
                  </span>
                </th>
                <th className="regi_quantity">
                  <span>{ms.Total_transactions}</span>
                </th>
              </tr>
          </tbody>
        </table>
      </div>
      
      <div id="modal" className={modalState ? "on" : ""} onClick={closeModal}>
        <div className="modal_inner" >
          <div className="modal_tit">
            <span className="product">{modalData.Membership_name}</span>
          </div>
          <div className="modal_content">
            <table>
              <tr>
                <th>기준가(만원)</th>
                <th className="standard_price">{modalData.Current_price}</th>
              </tr>
              <tr>
                <th>고가(만원)</th>
                <th className="high_price">{modalData.High_price}</th>
              </tr>
              <tr>
                <th>저가(만원)</th>
                <th className="low_price">{modalData.Low_price}</th>
              </tr>
              <tr>
                <th>총 거래량</th>
                <th className="total_quantity">
                  {modalData.Total_transactions}
                </th>
              </tr>
            </table>
            <div className="btn_wrapper Btn">
              {/* 호가,차트,매수 */}
              <button className="w72 bgGf5" type="button">
                호가
              </button>
              <button className="w72 bgGf5" type="button">
                차트
              </button>
              <button className="w168 bgN" type="button" onClick={OrderStart}>
                매수
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* 본 컨텐츠 : e */}

      {/* 관심회원권없음 empty : s  , on으로 작동 */}
      <div className="Interest_contents empty">
        <h2>등록된 관심회원권이 없습니다.</h2>
        <p>검색을 통해 관심회원권을 등록해보세요.</p>
        {/* <form>
          <div className="input_unit input_search">
            <button className="search-btn"></button>
            <input type="text" placeholder="회원권 검색하기" />
          </div>
        </form> */}
      </div>
      {/* 관심회원권없음 empty : e */}
    </div>
  );
}
export default Interest;
