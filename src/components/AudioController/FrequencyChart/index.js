import React, {useState, useEffect, useRef } from "react";
import Dygraph from 'dygraphs';


export const FrequencyChart = (props) => {
  const [chartData, setChartData] = useState({
    datasets:[],
  });
  const [chartOptions, setChartOptions] = useState({});

  var chartRef = useRef(null);

  useEffect(() => {
    //create graph object
    const g = new Dygraph(

      // containing div
      document.getElementById("graph"),
  
      // CSV or path to a CSV file.
      "Date,Temperature\n" +
      "2008-05-07,75\n" +
      "2008-05-08,70\n" +
      "2008-05-09,80\n"
  
    );

    //fetch graph data
    // fetch("/fftdata").then(
    //   res => res.json()
    // ).then(
    //   data => {
    //     setChartData({
          
    //     });
    //   }
    // )

  }, []);

  return(<div id="graph"></div>)
}

