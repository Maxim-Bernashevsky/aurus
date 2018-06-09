import React, { Component } from 'react';
import './Configurator.styl';
import Headpage from "../components/Headpage";
import Title from "../components/Title";
import Plus from "../components/Plus";

import car from '../assets/img/senat4.png';
import interior_select from '../assets/img/interior.jpg';
import oliva_preview from '../assets/img/interior_oliva.jpg';
import rose_preview from '../assets/img/interior_rose.jpg';
import etimoe_preview from '../assets/img/interior_etimoe.jpg';
import { getPrice, getTextPrice } from '../common/price';
import OrderDetails from "../components/OrderDetails";


const widthCar = 820;


const COLORS = Object.freeze({
  BLACK:   Symbol.for("black"),
  WHITE:  Symbol.for("white"),
  BLUE: Symbol.for("blue"),
  RED: Symbol.for("red")
});

const COLOR_TEXT = Object.freeze({
  BLACK:   "Черный",
  WHITE:  "Белый",
  BLUE: "Синий",
  RED: "Красный"
});

const INTERIORS = Object.freeze({
  OLIVA: Symbol.for("oliva"),
  ROSE: Symbol.for("rose"),
  ETIMOE: Symbol.for("etimoe")
});

const INTERIOR_TEXT = Object.freeze({
  OLIVA: "Оливковое дерево",
  ROSE: "Розовое дерево",
  ETIMOE: "Дерево этимое"
});


const ColorInput = (props) => {
  const {color, onChange, checked} = props;
  return (
    <label className={color}>
      <input
        type="radio"
        onChange={onChange}
        checked={ checked }
        name="color"
      />
      <span className="checkmark"/>
    </label>
  );
};

const InteriorInput = (props) => {
  const {type, selected, onChange, srcImg} = props;
  return (
    <label className={type}>
      <input
        type="radio"
        onChange={onChange}
        checked={ selected === INTERIORS[type.toUpperCase()] }
        name="interior"
      />
      <div className="checkmark">
        <img src={srcImg} alt={`Interior ${type}`} />
      </div>
      <span>{INTERIOR_TEXT[type.toUpperCase()]}</span>
    </label>
  );
};

class Configurator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: COLORS.BLACK,
      interior: INTERIORS.OLIVA,
      options: ['premiumPack'],
    };
  }

  onChangeColor = (e) => {
    const newColor = e.target.parentNode.className.toUpperCase();
    this.setState({
      color: COLORS[newColor]
    })
  };

  onChangeInterior = (e) => {
    const newInterior = e.target.parentNode.className.toUpperCase();
    this.setState({
      interior: INTERIORS[newInterior]
    })
  };

  onDeleteOption = (deleteOption) => {
    this.setState({
      options: this.state.options.filter(option => option !== deleteOption),
    });
  };

  getTotalPrice = () => this.state.options
    .map(option => this.price[option].value)
    .reduce((prev, cur) => prev + cur, 0)
    + this.price.base;

  getColorName = (color) => COLOR_TEXT[Symbol.keyFor(color).toUpperCase()];
  getInteriorName = (interior) => INTERIOR_TEXT[Symbol.keyFor(interior).toUpperCase()];

  componentWillMount() {
    this.price = getPrice.senat;
  }

  updateOrder() {
    // TODO
  }

  render() {
    const { color, interior, options } = this.state;
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

          <div className="blockColor">
            <h3>Цвет</h3>

            <div className="colors">
              <ColorInput
                color="black"
                checked={ color === COLORS.BLACK }
                onChange={this.onChangeColor}
              />
              <ColorInput
                color="white"
                checked={ color === COLORS.WHITE }
                onChange={this.onChangeColor}
              />
              <ColorInput
                color="blue"
                checked={ color === COLORS.BLUE }
                onChange={this.onChangeColor}
              />
              <ColorInput
                color="red"
                checked={ color === COLORS.RED }
                onChange={this.onChangeColor}
              />
            </div>
          </div>


          <div className="blockInterior">
            <h3>Интерьер</h3>
            <img
              className="selectedInterior"
              src={interior_select}
              alt="AURUS interior"
            />

            <div className="interiors">
              <InteriorInput
                type="oliva"
                selected={interior}
                onChange={this.onChangeInterior}
                srcImg={oliva_preview}
              />
              <InteriorInput
                type="rose"
                selected={interior}
                onChange={this.onChangeInterior}
                srcImg={rose_preview}
              />
              <InteriorInput
                type="etimoe"
                selected={interior}
                onChange={this.onChangeInterior}
                srcImg={etimoe_preview}
              />
            </div>

          </div>

          <OrderDetails
            color={this.getColorName(color)}
            interior={this.getInteriorName(interior)}
            price={this.price}
            options={options}
            onDeleteOption={this.onDeleteOption}
            configurator
          />

          <div className="options">
            <h3>Аксессуары</h3>
            <Plus
              width={28}
            />
          </div>

          <table className="totalPrice">
            <tbody>
            <tr>
              <td className="orderInfoLabel">Итоговая цена</td>
              <td className="orderInfoValue">{getTextPrice(this.getTotalPrice())} <sub>&#8381;</sub></td>
            </tr>
            </tbody>
          </table>

          <div className="customerForm">
            <hr/>
            TODO
            <form>
              <input type="text"/>
              <input type="text"/>
              <input type="text"/>
            </form>
            <hr/>
          </div>

        </div>

      </div>

    );
  }
}

export default Configurator;