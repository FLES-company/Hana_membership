import React from "react";
import "./History.css";
import icon_back from "./img/right-arrow.png";
import icon_favorites from "./img/icon_favorites.png";
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
      <div className="History_content empty">
        <p>회원권 거래내역이 없습니다.</p>
        <p>주문을 통해 회원권을 거래해보세요.</p>
        <Btn_navy />
      </div>
    </div>
  );
}
export default History;
