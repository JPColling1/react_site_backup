import React, {useState, useEffect, useRef } from "react";
import Dygraph from 'dygraphs';
import './dygraph.css';

//step left or right one datapoint
function stepCursor(direction, graph){
  var selected = graph.getSelection();
  if (direction=="left"){
    graph.setSelection(selected - 1);
    //set cursor to nearest datapoint left
  } else {
    graph.setSelection(selected + 1);
    //set cursor to nearest datapoint right
  }
}

//Highlight a band given a start and end frequency
function drawHighlight(startFreq, endFreq, graph) {
  if (graph){
    var start = graph.toDomXCoord(startFreq);
    var end = graph.toDomXCoord(endFreq);

    const { canvas_ctx_: ctx, layout_:area} = graph;
    const {area_: {y: top, h: height}} = area;

    ctx.fillStyle = "rgba(255, 255, 102, 0.5)";
    ctx.fillRect(start, top, end - start, height);
  }
}

export const FrequencyChart = (props) => {

  const [graph, setGraph] = useState(null);
  const [graphData, setGraphData] = useState(null);

  useEffect(() => {
    //fetch graph data
    fetch("/fftdata").then(
      res => res.json()
    ).then(
      data => {
        createGraph(JSON.parse(data["data"]));
        setGraphData(JSON.parse(data["data"]));
      }
    )
  }, []);

  //create graph object
  const createGraph = (data) => {
    setGraph(new Dygraph(
      // containing div
      document.getElementById("graph"),
      //data
      data,
      //options
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
        y2label: "will you show up?",
      }
    ));
  }

  //{debugger}
  return(<div>
          <button onClick={() => {stepCursor("left", graph)}}>Step left one datapoint</button>
          <button onClick={() => {stepCursor("right", graph)}}>Step right one datapoint</button>
          <div id="graph"></div>
          <div onClick={() => {drawHighlight(1000, 2000, graph)}} id="frequency"></div>
        </div>)
}

