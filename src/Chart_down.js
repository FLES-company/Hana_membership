import React from 'react';
import {Line} from 'react-chartjs-2';

const data = {
  labels: ["1", "2", "3", "4", "5"],
  datasets: [
    {
      fill: true,
      data: [10, 9, 11, 8, 5],
      pointRadius: 0,
      backgroundColor: '#D8C1FE'
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
function Chart_down() {
  return (
    <div>
        
        <Line data={data}
        options={options} />
    </div>
  );
}
export default Chart_down;