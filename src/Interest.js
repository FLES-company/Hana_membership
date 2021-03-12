import React, { useState } from "react";

import "./Interest.css";

import memberships from "./mock/membership_price.json";
import Header_sub from "./components/Header_sub";

function Interest({Membership_name, Current_price, Base_price, Total_transactions}) {

  const onCreate = () => {
  }

  return (
    <div className="Interest">
      <Header_sub />

      {/* 본 컨텐츠 : s */}
      <div className="Interest_contents">
        <table>
          <caption hidden>관심회원권</caption>
          <thead>
            <tr>
              <th className="productName">회원권명</th>
              <th class="price">현재가</th>
              <th class="info_compared">전일대비</th>
              <th class="regi_quantity">등록량</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="productName">{Membership_name}</th>
              <th className="price">{Current_price}</th>
              <th className={
                    Current_price % 3 == 0 ? "info_compared up" : "info_compared down"
                  }>
                {Base_price}
                <br />
                <span className="percent">({Math.round(Math.random() * 20)}%)</span>
              </th>
              <th className="regi_quantity">
                <span>{Total_transactions}</span>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
      {/* 본 컨텐츠 : e */}

      {/* 관심회원권없음 empty : s  , on으로 작동 */}
      <div className="Interest_contents empty">
        <h2>등록된 관심회원권이 없습니다.</h2>
        <p>검색을 통해 관심회원권을 등록해보세요.</p>
        <form>
          <div className="input_unit input_search">
            <button className="search-btn"></button>
            <input type="text" placeholder="회원권 검색하기" />
          </div>
        </form>
      </div>
      {/* 관심회원권없음 empty : e */}
    </div>
  );
}
export default Interest;
