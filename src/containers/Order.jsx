import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faChevronLeft from '@fortawesome/fontawesome-free-solid/faChevronLeft'
import './Order.styl';
import car from '../assets/img/senat5.png';
import Headpage from "../components/Headpage";

const widthCar = 600;


class Order extends Component {
  render() {
    return <div className="page">
        <Headpage mainTitle="Время быть первым" width={widthCar} title="Senat" subTitle="седан">
          <img width={widthCar} src={car} alt="AURUS Senat" style={{ transform: `translate(calc(50% - ${widthCar - 80}px), ${100}px)` }} />
        </Headpage>

        <div className="bodyPage">
          <Link to="/configurator" className="buttonBack">
            <FontAwesomeIcon icon={faChevronLeft} size="xs" transform={{ y: 3, x: -3 }} />
            Конфигуратор
          </Link>

          <div>
            <table className="orderInfo">
              <tbody>
                <tr>
                  <td className="orderInfoLabel">Базовая цена</td>
                  <td className="orderInfoValue">7 850 000</td>
                </tr>
                <tr>
                  <td className="orderInfoLabel">Премиальный пакет</td>
                  <td className="orderInfoValue">750 000</td>
                </tr>
              </tbody>
            </table>

            <table className="totalPrice">
              <tbody>
                <tr>
                  <td className="orderInfoLabel">Итоговая цена</td>
                  <td className="orderInfoValue">8 600 000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>;
  }
}

export default Order;