import React, { useRef } from "react";
import { Oscillosope, draw, set_CanvasCtx } from './Oscilloscope/index'
import { FrequencySpectrum, convertData } from './FrequencySpectrum/index';
import Snare1 from './Snare1.wav';

const AudioContext = window.AudioContext || window.webkitAudioContext;

var firstTime = false;

const AudioController = () => {
    //component state
    const [playing, setPlaying] = React.useState(false);
    const [hasLoaded, setHasLoaded] = React.useState(false);

    //component props
    const audioRef = useRef(null);

    const audioContext = new AudioContext();
    const analyzer1 = useRef(null);
    const analyzer2 = useRef(null);
    const gainNode = useRef(null);
    var audioElement = useRef(null);
    var track = useRef(null);

    var bufferLength = useRef(null);
    var dataArray1 = useRef(null);
    var dataArray2 = useRef(null);

    const sampleRate = 44100;

    //create audio
    const create_audio = () => {
        analyzer1.current = audioContext.createAnalyser();
        analyzer2.current = audioContext.createAnalyser();
        gainNode.current = audioContext.createGain();
        audioElement.current = audioRef.current;
        track.current = audioContext.createMediaElementSource(audioElement.current);
        track.current.connect(analyzer1.current).connect(analyzer2.current).connect(gainNode.current).connect(audioContext.destination);

        audioElement.current.addEventListener('ended', () => {
            console.log("playback ended");
            setPlaying(false);
        }, false);

        console.log("starting audio");

        //set oscilloscope canvas
        set_CanvasCtx();
        //canvasCtx1.current = canvasRef.current.getContext('2d');
    }   

    //play or pause audio
    const play_pause = () => {
        //if context is suspended, resume
        if (audioContext.state === 'suspended') {
            audioContext.resume();
        }

        // play or pause track depending on state
        if (playing === false) {
            console.log("playing");
            audioElement.current.play();
            setPlaying(true);
        } else if (playing === true) {
            console.log("pausing");
            audioElement.current.pause();
            setPlaying(false);
        }
    }

    //adjust gain
    function adjust_volume (value){
        gainNode.current.gain.value = value;
    }

    //get fft data
    function get_datapoints(){
        analyzer1.current.fftSize = 2048;
        analyzer2.current.fftSize = 2048;
        bufferLength.current = analyzer1.current.frequencyBinCount;
        dataArray1.current = new Uint8Array(bufferLength.current);
        dataArray2.current = new Uint8Array(bufferLength.current);
        analyzer1.current.getByteTimeDomainData(dataArray1.current);
        analyzer2.current.getByteFrequencyData(dataArray2.current);
    
        // console.log(dataArray1);
        // console.log(dataArray2);

        //setHasLoaded(true);
        draw(analyzer1.current, bufferLength.current, dataArray1.current);
        {debugger}
        if (firstTime === false){
            firstTime = true;
            repeat(analyzer2.current, dataArray2.current, sampleRate);
        }
    }

    // if (hasLoaded === true){
    //     create_dataset(analyzer2.current, dataArray2.current, sampleRate);
    // }
    
    //html components
    return (<div>    
        <audio src={Snare1} ref={audioRef} />

        <button onClick={() => {create_audio()}}>Start Audio</button>
        <button onClick={() => {get_datapoints()}}>get fft data</button>
        <button onClick={() => {play_pause()}}>
            <span>Play/Pause</span>
        </button>
        <input type="range" min="0" max="2" step="0.01" onChange={event => adjust_volume(event.target.value)}></input>
        
        <Oscillosope />        
        <FrequencySpectrum />
        
      </div>);
}

//set repeat
function repeat(analyzer2, dataArray2, sampleRate){
    {debugger}
    var timerID = setInterval(create_dataset(analyzer2, dataArray2, sampleRate), 5000);
}

//create frequency domain data
function create_dataset(analyzer2, dataArray2, sampleRate){
    analyzer2.getByteFrequencyData(dataArray2);
    {debugger}
    convertData(dataArray2, sampleRate);
}    


export default AudioController;