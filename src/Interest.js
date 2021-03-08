import React from "react";
import "./Interest.css";
import icon_back from "./img/right-arrow.png";
import icon_favorites from "./img/icon_favorites.png";
import icon_alarm_white from "./img/icon_alarm_white.png";

function Interest() {
  return (
    <div className="Interest">
      {/* back_header : s */}
      <div className="back_header">
        <div className="back_header_inner">
          <a href="/login" className="header_icon_item icon_back">
            <div className="icon_img">
              <img src={icon_back} Link to="/login" hidden />
            </div>
          </a>
          <select name="Order_items">
            <option value="관심회원권">관심회원권</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
          <a href="/login" className="header_icon_item icon_alarm_white">
            <div className="icon_img">
              <img src={icon_alarm_white} Link to="/login" />
            </div>
          </a>
        </div>
      </div>
      {/* back_header : e */}
      <div className="Interest_contents">
        <table>
          <caption hidden>관심회원권</caption>
          <thead>
            <tr>
              <th>회원권명</th>
              <th>현재가</th>
              <th>전일대비</th>
              <th>등록량</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="productName">88(팔팔)</th>
              <th className="price">21,000</th>
              <th className="info_compared up">
                37,450
                <br />
                <span className="percent">(823%)</span>
              </th>
              <th className="regi_quantity">
                <span>1,979</span>
              </th>
            </tr>
            <tr>
              <th className="productName">88(팔팔)</th>
              <th className="price">21,000</th>
              <th className="info_compared equal">
                37,450
                <br />
                <span className="percent">(823%)</span>
              </th>
              <th className="regi_quantity">
                <span>1,979</span>
              </th>
            </tr>
            <tr>
              <th className="productName">88(팔팔)</th>
              <th className="price">21,000</th>
              <th className="info_compared down">
                37,450
                <br />
                <span className="percent">(823%)</span>
              </th>
              <th className="regi_quantity">
                <span>1,979</span>
              </th>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 관심회원권없음 empty : s */}
      <div className="Interest_contents empty">
        <h2>등록된 관심회원권이 없습니다.</h2>
        <p>검색을 통해 관심회원권을 등록해보세요.</p>
        <form>
          <div className="input_unit input_search">
            <button className="search-btn"></button>
            <input type="text" placeholder="검색하기" />
          </div>
        </form>
      </div>
      {/* 관심회원권없음 empty : e */}
    </div>
  );
}
export default Interest;
