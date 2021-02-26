import React from "react";
import "./Tab2.css";

function Tab2() {
  return (
    <div className="Tab2">
      <div className="Tab2_contents">
        <div className="Order_items">
          <p className="tit">88(팔팔)</p>
          <p className="price">
            <span>42,000</span>원
          </p>
          <div className="info">
            <p className="flow up">
              37,450<span>(823%)</span>
            </p>
            <p className="quantity">
              거래량 <span>1,979</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tab2;
