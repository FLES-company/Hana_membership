import React from 'react';
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
    <div>
        
        <Line data={data}
        options={options} />
    </div>
  );
}
export default Chart;