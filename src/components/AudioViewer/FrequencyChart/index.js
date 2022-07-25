import React, {useState, useEffect, useRef } from "react";
import Dygraph from 'dygraphs';
import './dygraph.css';

//listen for key press
// function listenForKeyPress(event, graph){
//   if (event.key === "ArrowLeft" && event.shiftKey === true) {
//     stepCursor("left", graph);
//   } else if (event.key === "ArrowRight" && event.shiftKey === true){
//     stepCursor("right", graph);
//   }
// }

//step left or right one datapoint
function stepCursor(direction, graph){
  if (graph){
    //{debugger}
    var selected = graph.getSelection();
    if (direction=="left"){
      graph.setSelection(selected - 1);
      //set cursor to nearest datapoint left
    } else {
      graph.setSelection(selected + 1);
      //set cursor to nearest datapoint right
    }
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

//get highlight regions from backend
const fetchHighlight = (graph) => {
  fetch("/highlights").then(
    res => res.json()
  ).then(
    data => {
      {debugger}
      let freqList = JSON.parse(data["data"]);
      for (let i = 0; i<freqList.length; i++){
        drawHighlight(freqList[i][0], freqList[i][1], graph);
      }
    }
  );
}

export const FrequencyChart = ( { readyForData, getHandleChanges } ) => {

  const [graph, setGraph] = useState(null);
  const [graphData, setGraphData] = useState(null);
  const [isReady, setIsReady] = useState(false);

  const graphRef = useRef(null);

  useEffect(() => {
    if (readyForData !== isReady){
      if (readyForData){
        //fetch graph data
        fetch("/fftdata").then(
          res => res.json()
        ).then(
          data => {
            createGraph(JSON.parse(data["data"]));
            setGraphData(JSON.parse(data["data"]));
          }
        );
      }
      setIsReady(readyForData);
      //{debugger}
      getHandleChanges(handleChanges); //send function to highlight graph up a level to filter itself down to speed input and part item components
    }
  }, [readyForData]);

  //handle clicking on partItem or updating speed values
  const handleChanges = () => {
    {debugger}
    fetchHighlight(graphRef.current);
  }

  //create graph object
  const createGraph = (data) => {
    var newGraph = new Dygraph(
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
    );
    setGraph(newGraph);
    graphRef.current = newGraph;
    {debugger}
  }

  //{debugger}
  return(<div>
          <button onClick={() => {stepCursor("left", graph)}}>Step left one datapoint</button>
          <button onClick={() => {stepCursor("right", graph)}}>Step right one datapoint</button>
          <div id="graph"></div>
          <div onClick={() => {drawHighlight(1000, 2000, graph)}} id="frequency"></div>
        </div>)
}

//onKeyDown={() => {listenForKeyPress(graph)}}

