import React, { Component } from 'react';
import './Order.styl';
import car from '../assets/img/senat5.png';
const widthCar = 600;

import Headpage from "../components/Headpage";

class Order extends Component {
  render() {
    return (
      <div className="page">

        <Headpage
          mainTitle="Время быть первым"
          width={widthCar}
          title="Senat"
          subTitle="седан"
        >
          <img
            width={widthCar}
            src={car}
            alt="AURUS Senat"
            style={{ transform: `translate(calc(50% - ${widthCar - 80}px), ${100}px)` }}
          />
        </Headpage>

      </div>

    );
  }
}

export default Order;