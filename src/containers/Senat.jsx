import React, { Component } from 'react';
import './Senat.styl';
import carMain from '../assets/img/senat1.png';
import carFront from '../assets/img/senat2.png';
import carBack from '../assets/img/senat3.png';
import senatSM from '../assets/img/senat_sm.jpg';
import arsenalSM from '../assets/img/arsenal_sm.jpg';
import comendantSM from '../assets/img/comendant_sm.jpg';


const widthCar = 700;

import Headpage from "../components/Headpage";
import Title from "../components/Title";
import Button from "../components/Button";

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
            src={carMain}
            alt="AURUS Senat"
            style={{transform: `translate(calc(50% - ${widthCar - 80}px), ${100}px)`}}
          />
        </Headpage>

        <div className="carImages">
          <img
            className="carFront"
            src={carFront}
            alt="AURUS Senat front"
          />
          <img
            className="carBack"
            src={carBack}
            alt="AURUS Senat back"
          />
        </div>

        <div className="wrapButtonRight">
          <Button text="Конфигуратор" to="/senat"/>
        </div>

        <div className="blockInfo">
          <div>
            <h3>Общая информация</h3>
            <ul>
              <li>Размеры 5840/2000/1680/3300</li>
              <li>Полная масса 3200кг</li>
              <li>Разгон до 100 7.0с</li>
              <li>Максимальная скорость км/ч 250</li>
            </ul>
          </div>

          <div>
            <h3>Двигатель</h3>
            <ul>
              <li>Бензиновый с турбонаддувом</li>
              <li>Конфигурация V12/48</li>
              <li>Рабочий объем 6000см3</li>
              <li>Мощность 600/816 кВт/л.с.</li>
              <li>Крутящий момент 1000-1200</li>
            </ul>
          </div>

          <div>
            <h3>Трансмиссия</h3>
            <ul>
              <li>Полноприводная</li>
              <li>Коробка передач A9</li>
            </ul>
          </div>
        </div>

        <Title text="Модельный ряд" />
        <div className="blockModels">
          <div className="model">
            <div className="modelWrap">
              <img
                width={245}
                src={senatSM}
                alt="AURUS Senat"
              />
            </div>
            <h3>Senat</h3>
          </div>

          <div className="model">
            <div className="modelWrap">
              <img
                width={250}
                src={arsenalSM}
                alt="AURUS Arsenal"
              />
            </div>
            <h3>Arsenal</h3>
          </div>

          <div className="model">
            <div className="modelWrap">
              <img
                width={240}
                src={comendantSM}
                alt="AURUS Comendant"
              />
            </div>
            <h3>Comendant</h3>
          </div>
        </div>

        <div className="wrapButtonBottom">
          <Button text="Конфигуратор" to="/senat"/>
        </div>

      </div>

    );
  }
}

export default Senat;