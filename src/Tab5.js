import React, {useState} from "react";
import "./Tab5.css";
import "./components/Guide_ui.css";
import Btn_default from "./components/Btn_default";

function Tab5() {
  // 수량 카운트
  const [quantity, setquantity] = useState(0);

  const onIn_quantity = () => {
    setquantity(quantity + 1);
  };
  const onDe_quantity = () => {
    setquantity(quantity - 1);
  };
  // 가격 카운트
  const [price, setprice] = useState(21000);

  const onIn_price = () => {
    setprice(price + 1);
  };
  const onDe_price = () => {
    setprice(price - 1);
  };

  return (
    // 배경 -> 매도 : blue / 매수 : red
    // 체크박스 -> 매도 : chk_blue / 매수 : chk_red

    <div className="Tab_item Tab5 red">
      <div className="Tab_content Tab5_contents">
        <form>
          {/* 구분 */}
          <div className="content division">
            <span>구분</span>
            <div className="input_unit select">
              <select>
                <option value="1">개인/법인 매수 선택</option>
                <option value="2">개인</option>
                <option value="3">법인</option>
              </select>
            </div>
          </div>
          {/* 결제수단 */}
          <div className="content payment">
            <span>결제수단</span>
            <div className="input_unit select">
              <select>
                <option value="1">현금/신용 선택</option>
                <option value="2">현금</option>
                <option value="3">신용</option>
              </select>
            </div>
          </div>
          {/* 수량 */}
          <div className="content quantity">
            <span>수량</span>
            <div className="input_unit count">
              <button type="button" className="dec" onClick={onDe_quantity}></button>
              <input type="text" value={quantity} />
              <button type="button" className="inc" onClick={onIn_quantity}></button>
            </div>
          </div>
          {/* 가격(만원) */}
          <div className="content quantity disabled">
            <span>가격(만원)</span>
            <div className="input_unit count">
              <button type="button" className="dec" onClick={onDe_price}></button>
              <input type="text" value={price} disabled/>
              <button type="button" className="inc" onClick={onIn_price}></button>
            </div>
          </div>
          {/* 시장가 */}
          <div className="content check">
            <div className="input_unit checkbox red">
              <input id="checkbox1" type="checkbox" className="chk_red" />
              <label for="checkbox1" className="chk">
                <span>시장가</span>
              </label>
            </div>
          </div>
          <div className="footer_fixed">
            {/* 총액 */}
            <div className="content total">
              <span>총액</span>
              <div className="input_unit">
                <input type="text" placeholder="21,000" name="total" readOnly />
              </div>
            </div>
            {/*  버튼텍스트 : 매도(blue)/매수 신청(red) */}
            <Btn_default color="red" text="매수신청"/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Tab5;
