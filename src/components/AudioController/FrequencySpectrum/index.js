import React from "react";
import { HorizontalGridLines, LineSeries, XAxis, XYPlot, YAxis } from 'react-vis/dist';

var graphData = [];

export function convertData(dataArray, sampleRate){
  for (let i = 0; i<dataArray.length; i++){
      var xVar = (sampleRate / 2) * (i/dataArray.length);
      graphData[i] = {x:xVar, y:dataArray[i]};
  }
}

export const FrequencySpectrum = () => {
  return <XYPlot height={2000} width={2000} xDomain={[0,10000]} xType={'log'}>
          <XAxis />
          <YAxis />
          <LineSeries data={graphData}/>
          <HorizontalGridLines />
        </XYPlot>
}