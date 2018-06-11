import React, { Component } from 'react';
import './Configurator.styl';
import Headpage from "../components/Headpage";
import Plus from "../components/Plus";

import car from '../assets/img/senat4.png';
import interior_select from '../assets/img/interior.jpg';
import oliva_preview from '../assets/img/interior_oliva.jpg';
import rose_preview from '../assets/img/interior_rose.jpg';
import etimoe_preview from '../assets/img/interior_etimoe.jpg';
import { getPrice, getTextPrice } from '../common/price';
import OrderDetails from "../components/OrderDetails";
import {LoadingComponent} from "../containers/AsyncComponent"
import {COLORS, INTERIORS, INTERIOR_TEXT, getColorName, getInteriorName} from '../common/CONSTANTS'
import BlockColors from "../components/BlockColors";
import fb from '../common/firebase';
const widthCar = 820;

const defaultState = {
  color: COLORS.BLACK,
  interior: INTERIORS.OLIVA,
  options: ['premiumPack'],
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
      base: null,
      order: defaultState
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
      options: this.state.order.options.filter(option => option !== deleteOption),
    });
  };

  getTotalPrice = () => this.state.order.options
    .map(option => this.price[option].value)
    .reduce((prev, cur) => prev + cur, 0)
    + this.price.base;


  componentWillMount() {
    this.price = getPrice.senat;

    fb.on("value", snapshot => {
        this.setState({base: snapshot.val().test});
      },
      error => console.log("Error: " + error.code)
    );
  }


  getOrder = () => {
    const orderPresaved = localStorage.getItem("orderAU");
    const { base } = this.state;

    if(orderPresaved) {
      return base[orderPresaved]
    }

    const ref = fb.child("test/");
    const key = ref.push(defaultState).getKey();
    localStorage.setItem("orderAU", key);
    return defaultState
  };

  render() {
    if(!this.state.base) return (<LoadingComponent/>);

    const {color, interior, options} = this.getOrder();
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


          <BlockColors
            color={color}
            onChangeColor={this.onChangeColor}
          />

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
            color={getColorName(color)}
            interior={getInteriorName(interior)}
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