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