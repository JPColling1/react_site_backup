import React from 'react';
import Snare1 from './Snare1.wav';
const AudioContext = window.AudioContext || window.webkitAudioContext;

export default class WavViewer extends React.Component {
  constructor(props){
    super(props);
    this.state={
      playing: false
    }
    this.testSample = React.createRef();
    this.volume = React.createRef();
    this.width="500";
    this.height="500";
  }

  componentDidMount(){
    this.canvas1 = document.getElementById("canvas1");
    this.canvas2 = document.getElementById("canvas2");
    this.canvasCtx1 = this.canvas1.getContext('2d');
    this.canvasCtx2 = this.canvas2.getContext('2d');
  }

  create_audio(){
    this.audioContext = new AudioContext();
    this.audioElement = document.querySelector('audio');;
    
    this.analyzer1 = this.audioContext.createAnalyser();
    this.analyzer2 = this.audioContext.createAnalyser();
    this.gainNode = this.audioContext.createGain();
    this.track = this.audioContext.createMediaElementSource(this.audioElement);
    this.track.connect(this.analyzer1).connect(this.analyzer2).connect(this.gainNode).connect(this.audioContext.destination);

    this.audioElement.addEventListener('ended', () => {
      console.log("playback ended");
      this.setState({playing: false});
    }, false);

    console.log("starting audio");
  }

  play_pause(){
    console.log("checking if playing");
    if (this.audioContext.state === 'suspended') {
      this.audioContext.resume();
    }

    // play or pause track depending on state
    if (this.state.playing === false) {
        console.log("playing");
        this.audioElement.play();
        this.setState({playing: true});
    } else if (this.state.playing === true) {
        console.log("pausing");
        this.testSample.current.pause();
        this.setState({playing: false});
    }
  }

  adjust_volume = event => {
    this.gainNode.gain.value = event.target.value;
  }

  get_datapoints(){
    this.analyzer1.fftSize = 2048;
    this.analyzer2.fftSize = 2048;
    this.bufferLength1 = this.analyzer1.frequencyBinCount;
    this.bufferLength2 = this.analyzer2.frequencyBinCount;
    this.dataArray1 = new Uint8Array(this.bufferLength1);
    this.dataArray2 = new Uint8Array(this.bufferLength2);
    this.analyzer1.getByteTimeDomainData(this.dataArray1);
    this.analyzer2.getByteFrequencyData(this.dataArray2);

    //console.log(this.dataArray1);
    console.log(this.dataArray2);

    this.canvasCtx1.clearRect(0, 0, this.width, this.height);
    this.canvasCtx2.clearRect(0, 0, this.width, this.height);

    this.draw1();
    this.draw2();
  }

  draw1(){
    var self = this;
    requestAnimationFrame(function() {self.draw1();});
    this.analyzer1.getByteTimeDomainData(this.dataArray1);

    this.canvasCtx1.fillStyle = 'rgb(200, 200, 200)';
    this.canvasCtx1.fillRect(0, 0, this.width, this.height);

    this.canvasCtx1.lineWidth = 2;
    this.canvasCtx1.strokeStyle = 'rgb(0, 0, 0)';
    this.canvasCtx1.beginPath();

    var sliceWidth = this.width * 1.0 / this.bufferLength1;
    var x = 0;

    for(var i = 0; i < this.bufferLength1; i++) {

      var v = this.dataArray1[i] / 128.0;
      var y = v * this.height/2;

      if(i === 0) {
        this.canvasCtx1.moveTo(x, y);
      } else {
        this.canvasCtx1.lineTo(x, y);
      }

      x += sliceWidth;
    }

    this.canvasCtx1.lineTo(this.canvas1.width, this.canvas1.height/2);
    this.canvasCtx1.stroke();
  }

  draw2(){
    var self = this;
    requestAnimationFrame(function() {self.draw2();});
    this.analyzer2.getByteFrequencyData(this.dataArray2);

    this.canvasCtx2.fillStyle = 'rgb(200, 200, 200)';
    this.canvasCtx2.fillRect(0, 0, this.width, this.height);

    var barWidth = (this.width / this.bufferLength2) * 2.5;
    var barHeight;
    var x = 0;

    for(var i = 0; i < this.bufferLength2; i++) {
      barHeight = this.dataArray2[i] * 3;

      this.canvasCtx2.fillStyle = 'rgb(' + (barHeight+100) + ',100,100)';
      this.canvasCtx2.fillRect(x,this.height-barHeight/2,barWidth,barHeight);

      x += barWidth + 1;
    }
  }

  render(){
    return <div>
      <button onClick={this.create_audio.bind(this)}>Start Audio</button>
      <button onClick={this.get_datapoints.bind(this)}>get fft data</button>
      <audio src={Snare1} ref={this.testSample}></audio>
      <button onClick={this.play_pause.bind(this)}>
          <span>Play/Pause</span>
      </button>
      <input type="range" onChange={this.adjust_volume.bind(this)} ref={this.volume} min="0" max="2" step="0.01"></input>
      <canvas width={this.width} id="canvas1" height={this.height}>Oscillosope Display</canvas>
      <canvas width={this.width} id="canvas2" height={this.height}>Oscillosope Display</canvas>
    </div>
  }
}