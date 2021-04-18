import React from "react";
import "./Tab2.css";
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

function Tab2() {
  return (
    <div className="Tab_item Tab2">
      <div className="Tab_content Tab2_contents">
        {/* Order_items : s */}
        <div className="Order_items">
          <p className="tit">골든베이</p>
          <p className="price">
            <span>20,000</span>원
          </p>
          <div className="info">
            <p className="flow up">
              10,000<span>(5%)</span>
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

export default Tab2;
