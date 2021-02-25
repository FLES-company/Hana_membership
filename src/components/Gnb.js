import React from "react";
import "./Gnb.css";

function Gnb() {
  return (
    <div className="gnb">
      <div className="gnb_inner">
          <ul>
              <li className="gnb_inner_item on"><a href="#">주간 관심 TOP 10</a></li>
              <li className="gnb_inner_item"><a href="#">월간 상승/하락</a></li>
              <li className="gnb_inner_item"><a href="#">추천상품</a></li>
          </ul>
      </div>
    </div>
  );
}

export default Gnb;