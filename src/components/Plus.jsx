import React from 'react';
import "./Plus.styl";

const Plus = ({width = 28, weight = 2}) => (
  <div className="plus">
    <div style={{width: `${width}px`, height: `${weight}px`}}/>
    <div style={{width: `${width}px`, height: `${weight}px`, top: `-${weight}px`}}/>
  </div>
);

export default Plus;
