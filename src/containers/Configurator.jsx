import React, { Component } from 'react';
import './Configurator.styl';
import Headpage from "../components/Headpage";
import Plus from "../components/Plus";
import car from '../assets/img/senat4.png';
import interior_select from '../assets/img/interior.jpg';
import oliva_preview from '../assets/img/interior_oliva.jpg';
import rose_preview from '../assets/img/interior_rose.jpg';
import etimoe_preview from '../assets/img/interior_etimoe.jpg';
import { getPrice, getTextPrice, getTotalPrice } from '../common/price';
import OrderDetails from "../components/OrderDetails";
import {COLORS, INTERIORS, INTERIOR_TEXT, getColorName, getInteriorName, lsOrderKey} from '../common/CONSTANTS'
import BlockColors from "../components/BlockColors";
import fb from '../services/firebase';
import defaultOrder from "../common/defaultOrder"
const widthCar = 820;


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

    this.price = getPrice.senat;
    this.state = {
      base: null,
      order: defaultOrder,
      orderID: localStorage.getItem(lsOrderKey)
    };
  }

  componentWillMount() {
    fb.on("value", snapshot => {
        this.setState({base: snapshot.val().orders}, () => {

          const { base, orderID } = this.state;
          if(orderID) {
            return base[orderID]
          }else {
            const key = fb.child("orders/").push(defaultOrder).getKey();
            this.setState({orderID: key})
            localStorage.setItem(lsOrderKey, key);
            return defaultOrder
          }

        });
      },
      error => console.log("Error: " + error.code)
    );
  }

  onChangeColor = (e) => {
    const newColor = e.target.parentNode.className.toUpperCase();
    fb.child(`/orders/${this.state.orderID}/color`).set(COLORS[newColor])
  };

  onChangeInterior = (e) => {
    const newInterior = e.target.parentNode.className.toUpperCase();
    fb.child(`/orders/${this.state.orderID}/interior`).set(INTERIORS[newInterior])
  };

  onDeleteOption = (deleteOption) => {
    const {base, orderID} = this.state;
    const updateOptions = base[orderID].options.filter(option => option !== deleteOption);
    fb.child(`/orders/${this.state.orderID}/options`).set(updateOptions)
  };

  headBlock = () => (
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
  );

  render() {
    const {base, orderID} = this.state;

    if(!base || !orderID) return (this.headBlock());
    const order = base[orderID];
    const {color, interior, options, model} = order;

    return (
      <div className="page configurator">
        {this.headBlock()}

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
            model={model}
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
              <td className="orderInfoValue">{getTextPrice(getTotalPrice(order))} <sub>&#8381;</sub></td>
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