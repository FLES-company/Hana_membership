import React, { useState } from "react";
import "./Btn_default.css";
import "./Guide_ui.css";
import classNames from 'classnames'; 
import { Routes, Link, Switch, Route, BrowserRouter } from "react-router-dom";

function Btn_default({text, color, size, outline, fullWidth}) {
  const [modalData, setModalData] = useState(false);
  const [modalState, setModalState] = useState(false);

  const buyMembership = () => {
    let modal_data = '';
    if(text == '매도신청'){
      console.log("매도신청");
      modal_data = {
        'title' : '매도신청이 완료되었습니다.',
        'desc' : '내역 탭에서 정보를 확인해주세요.'
      }
      window.localStorage.setItem("sell", true);
    }else{
      modal_data = {
        'title' : '매수신청이 완료되었습니다.',
        'desc' : '내역 탭에서 정보를 확인해주세요.'
      }
      console.log("매수신청");
      window.localStorage.setItem("buy", true);
    }
    setModalData(modal_data)
    setModalState(true);
  }
  const closeModal = (e) => {
     setModalState(false);
  };

  return (
      // <input className={classNames('Btn_default',color, size, outline, fullWidth)} type="button" value={text} />
      <>
        <button className={classNames('Btn_default',color, size, outline, fullWidth)} type="button" onClick={buyMembership}>{text}</button>
        <div id="modal" className={modalState ? "on" : ""} onClick={closeModal}>
          <div className="modal_inner" >
            <div className="modal_tit">
              <span className="product">
                {modalData.title}
                <br>
                </br>{modalData.desc}
              </span>
            </div>
            <div className="modal_content">
              <table>
                <tr>
                  <th>구분</th>
                  <th className="standard_price">개인</th>
                </tr>
                <tr>
                  <th>결제수단</th>
                  <th className="high_price">현금</th>
                </tr>
                <tr>
                  <th>수량</th>
                  <th className="low_price">1</th>
                </tr>
                <tr>
                  <th>가격</th>
                  <th className="low_price">21,000</th>
                </tr>
              </table>
            </div>
          </div>
        </div>
       </>
  );
}

export default Btn_default;

Btn_default.defaultProps ={
  size: 'h47',
  text: '텍스트',
}
