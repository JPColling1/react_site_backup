import React, { useRef } from "react";

var canvasRef;
var canvasCtx;
const width = 500;
const height = 500;

//canvas
export const Oscillosope = () => {
    canvasRef = useRef(null);
    return (<canvas width={width} id="canvas1" height={height} ref={canvasRef}>Oscillosope Display</canvas>);
}

//create context for drawing and clear canvas
export function set_CanvasCtx(){
    canvasCtx = canvasRef.current.getContext('2d');
    canvasCtx.clearRect(0, 0, width, height);
}

//draw on canvas
export function draw(analyzer1, bufferLength, dataArray1){
    requestAnimationFrame(function() {draw(analyzer1, bufferLength, dataArray1);});
    analyzer1.getByteTimeDomainData(dataArray1);

    //var canvasCtx = canvasRef.current.getContext('2d');

    canvasCtx.fillStyle = 'rgb(200, 200, 200)';
    canvasCtx.fillRect(0, 0, width, height);

    canvasCtx.lineWidth = 2;
    canvasCtx.strokeStyle = 'rgb(0, 0, 0)';
    canvasCtx.beginPath();

    var sliceWidth = width * 1.0 / bufferLength;
    var x = 0;

    for(var i = 0; i < bufferLength; i++) {

        var v = dataArray1[i] / 128.0;
        var y = v * height/2;

        if(i === 0) {
        canvasCtx.moveTo(x, y);
        } else {
        canvasCtx.lineTo(x, y);
        }

        x += sliceWidth;
    }

    canvasCtx.lineTo(canvasRef.width, canvasRef.height/2);
    canvasCtx.stroke();
}

