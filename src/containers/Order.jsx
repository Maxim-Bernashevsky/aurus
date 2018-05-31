import React, { Component } from 'react';
import './Order.styl';
import goldline from '../assets/img/goldline.png';

import Title from "../components/Title";

class Order extends Component {
  render() {
    return (
      <div className="page">
        <Title text="Время быть первым" />

        <div className="goldline" />
        {/*<img className="goldline" src={goldline} alt="" />*/}
        {/*<img className="logo" src={car} alt="AURUS Senat" />*/}

      </div>

    );
  }
}

export default Order;