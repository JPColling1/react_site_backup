import React, {useState, useEffect, useRef } from "react";
import Dygraph from 'dygraphs';

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
export const Oscillosope = (props) => {
    //canvasRef = useRef(null);

    const [graph, setGraph] = useState(null);
    const [graphData, setGraphData] = useState(null);
    const [minimum, setMinimum] = useState(null);
    const [maximum, setMaximum] = useState(null);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        if (props.readyForData !== isReady){
            if (props.readyForData){
                //fetch graph data
                fetch("/timedata").then(
                res => res.json()
                ).then(
                    data => {
                        createGraph(JSON.parse(data["data"]));
                        setGraphData(JSON.parse(data["data"]));
                    }
                )
                //set graph minimum value
                fetch("/mintime").then(
                    res => res.json()
                ).then(
                    data => {
                        {debugger}
                        setMinimum(JSON.parse(data["data"]))
                    }
                )
                //set graph maximum value
                fetch("/maxtime").then(
                    res => res.json()
                ).then(
                    data => {
                        setMaximum(JSON.parse(data["data"]));
                    }
                )
            }
            setIsReady(props.readyForData);
        }
    }, [props.readyForData]);

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
                <p>Peak to peak level: {String(maximum - minimum)}</p>
        </div>);
}