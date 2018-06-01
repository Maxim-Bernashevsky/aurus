// import React from 'react';
// import proxy from "./proxy";
//
//
// function QRcode(text, size = 100) {
//   return
// }
//
//
// export default QRcode;


import React, { Component } from 'react';

class QRcode extends Component {
  render() {
    const {text, size = 100} = this.props;
    return (
      <img src={`https://api.qrserver.com/v1/create-qr-code/?data=${text}&size=${size}x${size}`}/>
    );
  }
}


export default QRcode;