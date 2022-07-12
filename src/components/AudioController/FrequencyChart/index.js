import React, {useState, useEffect, useRef } from "react";

//import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJs,
    CategoryScale,
    LineElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LinearScale,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJs.register(
    CategoryScale,
    LinearScale,
    LineElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
);

// var analyzer2;
// var dataArray2;
// var mounted = false;


// export function initData(analyzer, dataArray){
//   analyzer2 = analyzer;
//   dataArray2 = dataArray;
//   mounted = true;
// }

// function convertData(dataArray, sampleRate){
//   var graphData = [];
//   for (let i = 0; i<dataArray.length; i++){
//       var xVar = (sampleRate / 2) * (i/dataArray.length);
//       graphData[i] = {x:xVar, y:dataArray[i]};
//   }
//   return graphData;
// }

const crosshair = (chart, mousemove) => {
  //console.log(mousemove);
  chart.update('none');

  //{debugger}

  // const x = mousemove.offsetX;
  // const y = mousemove.offsetY;

  const { ctx, chartArea:{ top, bottom, left, right }} = chart;

  ctx.save();

  ctx.strokeStyle = 'rgba(102, 102, 102, 1)';
  ctx.lineWidth = 1;

  if (mousemove.offsetX >= left && mousemove.offsetX <= right && mousemove.offsetY >= top && mousemove.offsetY <= bottom){
    // ctx.beginPath();
    // ctx.moveTo(left, mousemove.offsetY);
    // ctx.lineTo(right, mousemove.offsetY);
    // ctx.stroke();
    // ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(mousemove.offsetX, top);
    ctx.lineTo(mousemove.offsetX, bottom);
    ctx.stroke();
    ctx.closePath();
  }
}

export const FrequencyChart = (props) => {
  const [chartData, setChartData] = useState({
    datasets:[],
  });
  const [chartOptions, setChartOptions] = useState({});

  var chartRef = useRef(null);

  useEffect(() => {
    //{debugger}
    fetch("/fftdata").then(
      res => res.json()
    ).then(
      data => {
        setChartData({
          datasets: [{
            indexAxis: 'x',
            parsing: false,
            label: "test data",
            data: JSON.parse(data["data"]),
            backgroundColor: "#0000FF",
            borderColor: "#0000FF",
            //hitRadius: 0,
            
            decimation: {
              enabled: true,
              algorithm: 'min-max',
            },
          }]
        });
      }
    )
    setChartOptions({
        spanGaps: true,
        animation: false,
        normalized: true,
        interaction: {
          mode: 'x',
        },
        elements: {
          line: {
              lineTension: 0,
              tension: false,
              stepped: 0,
              borderDash: [],
          },
          point: {
              radius: 0,
              hitRadius: 0,
              hoverRadius: 0,
          }
        },
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Frequency Spectrum"
            },
            tooltip: {
              enabled: false,
            },
        },
        scales: {
          x: {
            type: 'linear',
            ticks : {
              minRotation: 0,
              maxRotation: 0,
              sampleSize: 10,
            },
            min: 0,
            max: 12500,
          },
          y: {
            type: 'linear',
            ticks : {
              minRotation: 0,
              maxRotation: 0,
              sampleSize: 10,
            },
            min: -140,
            max: 0,
          }
        },
    });

   // var chartThing = chartRef.current;

   // {debugger}
    if (chartRef.current.canvas !== null){
      chartRef.current.canvas.addEventListener('mousemove', (e) => {
        crosshair(chartRef.current, e);
      })
    }
    //create_dataset();
  }, []);

  // const create_dataset = () => {
  //   setTimeout(create_dataset, 17);
  //   if (mounted === true){
  //     analyzer2.getByteFrequencyData(dataArray2);
  //     setChartData({datasets: [{
  //         label: "fftData",
  //         data: convertData(dataArray2, props.SR),
  //       }]
  //     });
  //   }
  // } 

  //{debugger}
  return(<Line options={chartOptions} ref={chartRef} data={chartData}/>)
}

