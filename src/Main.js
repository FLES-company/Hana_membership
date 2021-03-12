import React, {useState} from "react";
import { Routes, Link, Switch, Route, BrowserRouter } from "react-router-dom";

//common component
import Header from "./components/Header";
import Gnb from "./components/Gnb";

// page
import Body from "./components/Body";
import Interest from "./Interest";
import Market from "./Market";
import Order from "./Order";
import Chart from "./Chart";
import History from "./History";
import Mypage from "./Mypage";

//css
import "./components/Footer.css";

//image
import icon_f_off_1 from "./img/icon_f_off_1.png";
import icon_f_off_2 from "./img/icon_f_off_2.png";
import icon_f_off_3 from "./img/icon_f_off_3.png";
import icon_f_off_4 from "./img/icon_f_off_4.png";
import icon_f_off_5 from "./img/icon_f_off_5.png";
import icon_f_off_6 from "./img/icon_f_off_6.png";
import icon_f_on_1 from "./img/icon_f_on_1.png";
import icon_f_on_2 from "./img/icon_f_on_2.png";
import icon_f_on_3 from "./img/icon_f_on_3.png";
import icon_f_on_4 from "./img/icon_f_on_4.png";
import icon_f_on_5 from "./img/icon_f_on_5.png";
import icon_f_on_6 from "./img/icon_f_on_6.png";

const header_obj = {
  999: <Header />,
  0: "",
  1: ""
}
const gnb_obj = {
  999: <Gnb />,
  0: "",
  1: ""
}

const obj = {
    999: <Body />,
    0: <Interest />,
    1: <Market />,
    2: <Order />,
    3: <Chart />,
    4: <History />,
    5: <Mypage />
};


function Main() {
  console.log(window.localStorage.getItem("userinfo"));
    const [ gnb, setGnb ] = useState(999);
    const [ header, setHeader ] = useState(999);
    const [ mainTab, setMainTab ] = useState(999);
    const ClickHandler = (e) => {
      setMainTab(e.target.dataset.id);
      if(e.target.dataset.id == 0){
        setGnb(0);
        setHeader(0);
      }else{
        setGnb(1);
        setHeader(1);
      }
    }
    return (
      <>
        { header_obj[header] }
        { gnb_obj[gnb] }
        { obj[mainTab] }
        <div className="footer">
          <div className="footer_inner">
            <ul>
              <li className={mainTab == 0 ? 'footer_inner_item on' : 'footer_inner_item'} onClick={ClickHandler} data-id="0">
                {/* Link태그 = a태그 */}
                <p data-id="0">
                  <img data-id="0" src={mainTab == 0 ? icon_f_on_1 : icon_f_off_1}/>
                  <span data-id="0">관심</span>
                </p>
              </li>
              <li className={mainTab == 1 ? 'footer_inner_item on' : 'footer_inner_item'} onClick={ClickHandler} data-id="1">
                <p data-id="1">
                  <img data-id="1" src={mainTab == 1 ? icon_f_on_2 : icon_f_off_2} />
                  <span data-id="1">시세</span>
                </p>
              </li>
              <li className={mainTab == 2 ? 'footer_inner_item on' : 'footer_inner_item'} onClick={ClickHandler} data-id="2">
                <p data-id="2">
                  <img data-id="2" src={mainTab == 2 ? icon_f_on_3 : icon_f_off_3}  />
                  <span data-id="2">주문</span>
                </p>
              </li>
              <li className={mainTab == 3 ? 'footer_inner_item on' : 'footer_inner_item'} onClick={ClickHandler} data-id="3">
                <p data-id="3">
                  <img data-id="3" src={mainTab == 3 ? icon_f_on_4 : icon_f_off_4}  />
                  <span data-id="3">차트</span>
                </p>
              </li>
              <li className={mainTab == 4 ? 'footer_inner_item on' : 'footer_inner_item'} onClick={ClickHandler} data-id="4">
                <p data-id="4">
                  <img data-id="4" src={mainTab == 4 ? icon_f_on_5 : icon_f_off_5}  />
                  <span data-id="4">내역</span>
                </p>
              </li>
              <li className={mainTab == 5 ? 'footer_inner_item on' : 'footer_inner_item'} onClick={ClickHandler} data-id="5">
                <p data-id="5">
                  <img data-id="5" src={mainTab == 5 ? icon_f_on_6 : icon_f_off_6}  />
                  <span data-id="5">정보</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
  
  export default Main;
  