import React, {useState, useEffect, useRef } from "react";
import Dygraph from 'dygraphs';

// var canvasRef;
// var canvasCtx;
// const width = 500;
// const height = 500;

//canvas
//step left or right one datapoint
function stepCursor(direction, graph){
    if (graph){
      {debugger}
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

//Oscilloscope Component
export const Oscillosope = () => {
    //canvasRef = useRef(null);

    const [graph, setGraph] = useState(null);
    const [graphData, setGraphData] = useState(null);

    useEffect(() => {
        //fetch graph data
        fetch("/timedata").then(
            res => res.json()
        ).then(
            data => {
            {debugger}
            createGraph(JSON.parse(data["data"]));
            setGraphData(JSON.parse(data["data"]));
            }
        )
    }, []);

    const createGraph = (data) => {
        setGraph(new Dygraph(
            // containing div
            document.getElementById("oscilloscope"),
            //data
            data,
            //options
            {
            hideOverlayOnMouseOut: false,
            labels: ["time(seconds)", "level"],
            labelsSeparateLines: true,
            labelsDiv: document.getElementById("labels1"),
            height: 500,
            width: 1000,
            title: "Time Domain Data",
            xlabel: "time(seconds)",
            ylabel: "level",
            y2label: "will you show up?",
            }
        ));
    }

    return(<div>
                <button onClick={() => {stepCursor("left", graph)}}>Step left one datapoint</button>
                <button onClick={() => {stepCursor("right", graph)}}>Step right one datapoint</button>
                <div id="oscilloscope"></div>
                <div id="labels1"></div>
        </div>);
}









//create context for drawing and clear canvas
// export function set_CanvasCtx(){
//     canvasCtx = canvasRef.current.getContext('2d');
//     canvasCtx.clearRect(0, 0, width, height);
// }

// //draw on canvas
// export function draw(analyzer1, bufferLength, dataArray1){
//     requestAnimationFrame(function() {draw(analyzer1, bufferLength, dataArray1);});
//     analyzer1.getByteTimeDomainData(dataArray1);

//     //var canvasCtx = canvasRef.current.getContext('2d');

//     canvasCtx.fillStyle = 'rgb(200, 200, 200)';
//     canvasCtx.fillRect(0, 0, width, height);

//     canvasCtx.lineWidth = 2;
//     canvasCtx.strokeStyle = 'rgb(0, 0, 0)';
//     canvasCtx.beginPath();

//     var sliceWidth = width * 1.0 / bufferLength;
//     var x = 0;

//     for(var i = 0; i < bufferLength; i++) {

//         var v = dataArray1[i] / 128.0;
//         var y = v * height/2;

//         if(i === 0) {
//         canvasCtx.moveTo(x, y);
//         } else {
//         canvasCtx.lineTo(x, y);
//         }

//         x += sliceWidth;
//     }

//     canvasCtx.lineTo(canvasRef.width, canvasRef.height/2);
//     canvasCtx.stroke();
// }export function set_CanvasCtx(){
//     canvasCtx = canvasRef.current.getContext('2d');
//     canvasCtx.clearRect(0, 0, width, height);
// }

// //draw on canvas
// export function draw(analyzer1, bufferLength, dataArray1){
//     requestAnimationFrame(function() {draw(analyzer1, bufferLength, dataArray1);});
//     analyzer1.getByteTimeDomainData(dataArray1);

//     //var canvasCtx = canvasRef.current.getContext('2d');

//     canvasCtx.fillStyle = 'rgb(200, 200, 200)';
//     canvasCtx.fillRect(0, 0, width, height);

//     canvasCtx.lineWidth = 2;
//     canvasCtx.strokeStyle = 'rgb(0, 0, 0)';
//     canvasCtx.beginPath();

//     var sliceWidth = width * 1.0 / bufferLength;
//     var x = 0;

//     for(var i = 0; i < bufferLength; i++) {

//         var v = dataArray1[i] / 128.0;
//         var y = v * height/2;

//         if(i === 0) {
//         canvasCtx.moveTo(x, y);
//         } else {
//         canvasCtx.lineTo(x, y);
//         }

//         x += sliceWidth;
//     }

//     canvasCtx.lineTo(canvasRef.width, canvasRef.height/2);
//     canvasCtx.stroke();
// }

