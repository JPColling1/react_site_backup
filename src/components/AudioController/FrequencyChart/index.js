import React, {useState, useEffect, useRef } from "react";
import Dygraph from 'dygraphs';


export const FrequencyChart = (props) => {

  useEffect(() => {
    //fetch graph data
    fetch("/fftdata").then(
      res => res.json()
    ).then(
      data => {
        {debugger}
        createGraph(JSON.parse(data["data"]));
      }
    )
  }, []);

  //create graph object
  const createGraph = (data) => {
    const g = new Dygraph(

      // containing div
      document.getElementById("graph"),
  
      data,
      {
        hideOverlayOnMouseOut: false,
        labels: ["frequency(Hz)", "level(dB)"],
        labelsSeparateLines: true,
        labelsDiv: document.getElementById("frequency"),
        height: 500,
        width: 1000,
      }
      // CSV or path to a CSV file.
      // "Date,Temperature\n" +
      // "2008-05-07,75\n" +
      // "2008-05-08,70\n" +
      // "2008-05-09,80\n"
  
    );
  }

  return(<div>
          <div id="frequency"></div>
          <div id="graph"></div>
        </div>)
}

