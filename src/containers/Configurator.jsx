import React, { Component } from 'react';
import './Configurator.styl';
import car from '../assets/img/senat4.png';
import interior from '../assets/img/interior.jpg';
const widthCar = 820;

import Headpage from "../components/Headpage";
import Title from "../components/Title";
import Plus from "../components/Plus";

class Configurator extends Component {
  render() {
    return (
      <div className="page configurator">

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

        <div className="bodyPage">

          <div className="colorCar">
            <h3>Цвет</h3>

            <div className="colors">
              <div className="cBlack" />
              <div className="cWhite" />
              <div className="cBlue" />
              <div className="cRed" />
            </div>
          </div>


          <div className="interior">
            <h3>Интерьер</h3>
            <img
              src={interior}
              alt="AURUS interior"
            />
          </div>



          <Title text="Cтоимость"/>

          <table className="orderInfo">
            <tbody>
            <tr>
              <td className="orderInfoLabel">Базовая цена</td>
              <td className="orderInfoValue">7 850 000 <sub>&#8381;</sub></td>
            </tr>
            <tr>
              <td className="orderInfoLabel">Премиальный пакет</td>
              <td className="orderInfoValue">750 000 <sub>&#8381;</sub></td>
              <td>
                <Plus width={10} weight={1} />
              </td>
            </tr>
            </tbody>
          </table>

          <div className="options">
            <h3>Аксессуары</h3>
            <Plus width={28} />
          </div>



          <table className="totalPrice">
            <tbody>
            <tr>
              <td className="orderInfoLabel">Итоговая цена</td>
              <td className="orderInfoValue">8 600 000 <sub>&#8381;</sub></td>
            </tr>
            </tbody>
          </table>


        </div>




      </div>

    );
  }
}

export default Configurator;