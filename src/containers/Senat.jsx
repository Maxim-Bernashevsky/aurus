import React, { Component } from 'react';
import './Configurator.styl';
import car from '../assets/img/senat1.png';
const widthCar = 700;

import Headpage from "../components/Headpage";

class Senat extends Component {
  render() {
    return (
      <div className="page">

        <Headpage
          mainTitle="Пробуждение внутренней силы"
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

export default Senat;