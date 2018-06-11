import React, { Component } from 'react';
import {getTextPrice} from "../common/price";
import Title from "./Title"
import Plus from "./Plus"
import "./OrderDetails.styl"


class OrderDetails extends Component {
  render() {
    const {color, interior, price, options, onDeleteOption, configurator, model} = this.props;
    return (
      <React.Fragment>
        {configurator && <Title text="Заказ"/>}

        <table  className="orderInfo">
          <tbody>
            <tr className="selectedOptions">
              <td className="orderCarName">{model.toUpperCase()}</td>
            </tr>
            <tr className="selectedOptions">
              <td>{`Цвет: ${color}`}</td>
            </tr>
            <tr className="selectedOptions">
              <td>{`Интерьер: ${interior}`}</td>
            </tr>
          </tbody>
        </table>

        <table className="orderInfo">
          <tbody>
          <tr>
            <td className="orderInfoLabel">Базовая цена</td>
            <td className="orderInfoValue">{getTextPrice(price.base)} <sub>&#8381;</sub></td>
          </tr>
          {options && options.map(option =>
            (
              <tr key={option}>
                <td className="orderInfoLabel">{ price[option].label }</td>
                <td className="orderInfoValue">{ getTextPrice(price[option].value)} <sub>&#8381;</sub></td>

                { configurator && <td>
                    <Plus width={10} weight={1} onClick={() => onDeleteOption(option)} />
                  </td>
                }
              </tr>
            ))
          }
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default OrderDetails;
