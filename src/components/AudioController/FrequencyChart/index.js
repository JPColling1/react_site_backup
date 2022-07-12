import React, {useState, useEffect, useRef } from "react";
import Dygraph from 'dygraphs';
import './dygraph.css';

//Highlight a band given a start and end frequency
function drawHighlight(startFreq, endFreq, graph) {
  var left = graph.toDomXCoord(startFreq);
  var right = graph.toDomXCoord(endFreq);

  canvas.fillStyle = "rgba(255, 255, 102, 0.5)";
  canvas.fillRect(left, top, right - left, bottom - top);
}

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
        title: "Frequency Spectrum",
        xlabel: "frequency(Hz)",
        ylabel: "level(dB)",
        y2label: "will you show?",
      }
      // CSV or path to a CSV file.
      // "Date,Temperature\n" +
      // "2008-05-07,75\n" +
      // "2008-05-08,70\n" +
      // "2008-05-09,80\n"
  
    );
    drawHighlight(1000, 2000, g);
  }

  return(<div>
          <div id="graph"></div>
          <div id="frequency"></div>
        </div>)
}

