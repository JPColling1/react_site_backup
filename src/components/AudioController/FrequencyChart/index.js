import React, {useState, useEffect} from "react";

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

var analyzer2;
var dataArray2;
var mounted = false;

export function initData(analyzer, dataArray){
  analyzer2 = analyzer;
  dataArray2 = dataArray;
  mounted = true;
}

function convertData(dataArray, sampleRate){
  var graphData = [];
  for (let i = 0; i<dataArray.length; i++){
      var xVar = (sampleRate / 2) * (i/dataArray.length);
      graphData[i] = {x:xVar, y:dataArray[i]};
  }
  return graphData;
}

export const FrequencyChart = (props) => {
  const [chartData, setChartData] = useState({
    datasets:[],
  });
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    fetch("/fftdata").then(
      res => res.json()
    ).then(
      data => {
        setChartData({
          datasets: [{
            label: "test data",
            data: data["data"],
          }]
        });
      }
    )
    setChartOptions({
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Frequency Spectrum"
            },
        },
        scales: {
          x: {
            type: 'linear',
          },
        },
    });
    create_dataset();
  }, []);

  const create_dataset = () => {
    setTimeout(create_dataset, 17);
    if (mounted === true){
      analyzer2.getByteFrequencyData(dataArray2);
      setChartData({datasets: [{
          label: "fftData",
          data: convertData(dataArray2, props.SR),
        }]
      });
    }
  } 
  

  return(<Line options={chartOptions} data={chartData}/>)
}

