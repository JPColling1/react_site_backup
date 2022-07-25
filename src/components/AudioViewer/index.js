import React, { useRef } from "react";
import { Oscillosope, draw, set_CanvasCtx } from './Oscilloscope/index'
import { FrequencyChart } from "./FrequencyChart";
import PathSetter from "./PathSetter";
import PartFetcher from "./PartFetcher";
import Snare1 from './Snare1.wav';

const AudioContext = window.AudioContext || window.webkitAudioContext;

const AudioViewer = () => {
    //component state
    // const [playing, setPlaying] = React.useState(false);
    // const [time, setTime] = React.useState(0);
    const [filePath, setFilePath] = React.useState(0);
    const [readyForData, setReadyforData] = React.useState(false);
    const [handleChanges, setHandleChanges] = React.useState(null);

    //component props
    // const audioRef = useRef(null);

    // const audioContext = new AudioContext();
    // const analyzer1 = useRef(null);
    // const analyzer2 = useRef(null);
    // const gainNode = useRef(null);
    // var audioElement = useRef(null);
    // var track = useRef(null);

    // var bufferLength = useRef(null);
    // var dataArray1 = useRef(null);
    // var dataArray2 = useRef(null);

    // const sampleRate = 44100;

    //create audio
    // const create_audio = () => {
    //     analyzer1.current = audioContext.createAnalyser();
    //     analyzer2.current = audioContext.createAnalyser();
    //     gainNode.current = audioContext.createGain();
    //     audioElement.current = audioRef.current;
    //     track.current = audioContext.createMediaElementSource(audioElement.current);
    //     track.current.connect(analyzer1.current).connect(analyzer2.current).connect(gainNode.current).connect(audioContext.destination);

    //     audioElement.current.addEventListener('ended', () => {
    //         console.log("playback ended");
    //         setPlaying(false);
    //     }, false);

    //     console.log("starting audio");

    //     //set oscilloscope canvas
    //     //set_CanvasCtx();
    //     //set_chart_ctx();
    // }   

    //play or pause audio
    // const play_pause = () => {
    //     //if context is suspended, resume
    //     if (audioContext.state === 'suspended') {
    //         audioContext.resume();
    //     }

    //     // play or pause track depending on state
    //     if (playing === false) {
    //         console.log("playing");
    //         audioElement.current.play();
    //         setPlaying(true);
    //         // console.log("time is at " + audioElement.current.currentTime);
    //         // audioElement.current.currentTime = 0;
    //         // console.log(audioElement.current.currentTime);
    //     } else if (playing === true) {
    //         console.log("pausing");
    //         audioElement.current.pause();
    //         setPlaying(false);
    //     }
    // }

    //adjust gain
    // const adjust_volume = (value) => {
    //     gainNode.current.gain.value = value;
    // }

    // const adjust_time = (value) => {
    //     fetch("/currentTime", {
    //         method:"POST",
    //         body: JSON.stringify({"currTime": value}),
    //         headers: new Headers({ 
    //             'Content-Type': 'application/json',
    //         }),
            
    //     }).then(response  => {
    //         return response.json();
    //     }).then(data => {
    //         console.log(data);
    //     }).catch(error => console.log(error));

    //     value += 1;
    //     //setTime(value);
    //     //console.log(time);
    // }

    //set file path on path change
    const handlePathChange = (e) => {
        setReadyforData(false);
        setFilePath(e.target.value);
    }

    //set function to highlight regions of frequency chart
    const getHandleChanges = (method) => {
        setHandleChanges(() => method);
    }

    //html components
    return (<div>    
        <div>Paste file path here</div>
        <input onChange={(e) => handlePathChange(e)}></input>
        <PathSetter filePath={filePath} readyData={setReadyforData}/>

        <PartFetcher handleChanges={handleChanges}/>

        {/* <audio src={Snare1} ref={audioRef} /> */}

        {/* <button onClick={() => {create_audio()}}>Start Audio</button> */}
        {/* <button onClick={() => {get_datapoints()}}>get fft data</button> */}
        {/* <button onClick={() => {play_pause()}}>
            <span>Play/Pause</span>
        </button> */}
        {/* <input type="range" min="0" max="2" step="0.01" onChange={event => adjust_volume(event.target.value)}></input> */}
        {/* <input type="range" min="0" max="1" step="0.01" onChange={event => adjust_time(event.target.value)}></input> */}

        <Oscillosope readyForData={readyForData}/>
        <FrequencyChart readyForData={readyForData} getHandleChanges={getHandleChanges}/>
        
      </div>);
}



export default AudioViewer;