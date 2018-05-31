import React, { Component } from 'react';
import './Configurator.styl';
import car from '../assets/img/senat4.png';
const widthCar = 820;

import Headpage from "../components/Headpage";

class Configurator extends Component {
  render() {
    return (
      <div className="page">

        <Headpage
          mainTitle="Исполнение желаний"
          width={widthCar}
          title="Senat"
          subTitle="седан"
        >
          <img
            width={widthCar}
            src={car}
            alt="AURUS Senat"
            style={{transform: `translate(calc(50% - ${widthCar - 80}px), ${100}px)`}}
          />
        </Headpage>

      </div>

    );
  }
}

export default Configurator;