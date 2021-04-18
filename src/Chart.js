import React from "react";
import "./Tab2.css";
import { Routes, Link, Switch, Route, BrowserRouter } from "react-router-dom";
import icon_back from "./img/right-arrow.png";
import icon_favorites_cancle from "./img/icon_favorites_cancle.png";
import {Line} from 'react-chartjs-2';
const data = {
  labels: ["1", "2", "3", "4", "5"],
  datasets: [
    {
      fill: true,
      data: [7, 5, 6, 4, 9],
      pointRadius: 0,
      backgroundColor: '#B3BDFD'
    }
  ]
  
};

const options = {
    fillColor : "#FFFFFF",
    scales: {
      yAxes: [{
        gridLines: {
          display: false
        },
        ticks: {
            display: false,
            beginAtZero: true,
         },
      }],
      xAxes: [{
        gridLines: {
          display: false
        },
        ticks: {
            display: false,
            beginAtZero: true,}
      }]
    },
    legend: {
      display: false
    },
  
  }

function Chart() {
  return (
    <div className="Tab2">
      {/* back_header : s */}
        <div className="back_header">
          <div className="back_header_inner">
            <a href="/home" className="header_icon_item icon_back">
              <div className="icon_img">
                <img src={icon_back} />
              </div>
            </a>
            <select className="Order_items">
              <option value="88(팔팔)">골든베이</option>
            </select>
            <a to="/login" className="header_icon_item icon_favorites">
              <div className="icon_img">
                <img src={icon_favorites_cancle} />
              </div>
            </a>
          </div>
      </div>
      {/* back_header : e */}
      <div className="Tab2_contents">
        {/* Order_items : s */}
        <div className="Order_items">
          <p className="tit">골든베이</p>
          <p className="price">
            <span>20,000</span>원
          </p>
          <div className="info">
            <p className="flow up">
              1,000<span>(5%)</span>
            </p>
            <p className="quantity">
              거래량 <span>22</span>
            </p>
          </div>
        </div>
        {/* Order_items : e */}

        <div className="Order_items_graph"></div>

        <div className="terms">
          {/* <ul>
            <li className="item on"><a href="#">1D</a></li>
            <li className="item"><a href="#">7D</a></li>
            <li className="item"><a href="#">1M</a></li>
            <li className="item"><a href="#">6M</a></li>
            <li className="item"><a href="#">1Y</a></li>
            <li className="item"><a href="#">3Y</a></li>
            <li className="item"><a href="#">MAX</a></li>
          </ul> */}
          <div>          
            <Line data={data}
            options={options} />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Chart;
