import React from "react";
import "./Tab2.css";

function Tab2() {
  return (
    <div className="Tab2">
      <div className="Tab2_contents">
        {/* Order_items : s */}
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
        {/* Order_items : e */}

        <div className="Order_items_graph"></div>

        <div className="terms">
          <ul>
            <li className="item on"><a href="#">1D</a></li>
            <li className="item"><a href="#">7D</a></li>
            <li className="item"><a href="#">1M</a></li>
            <li className="item"><a href="#">6M</a></li>
            <li className="item"><a href="#">1Y</a></li>
            <li className="item"><a href="#">3Y</a></li>
            <li className="item"><a href="#">MAX</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Tab2;
