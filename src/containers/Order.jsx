import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faChevronLeft from '@fortawesome/fontawesome-free-solid/faChevronLeft'
import './Order.styl';
import car from '../assets/img/senat5.png';
import Headpage from "../components/Headpage";
import QRcode from "../components/QRcode";

const widthCar = 600;

import MyceliumGear from "../services/myceliumGear"



class Order extends Component {

  componentWillMount(){

    const gateway = new MyceliumGear.Gateway('b0f513c8efd69075750b8c55b5b64f1a356ad05e83d2db22eac3e4cf74f56f0d', 'gateway-secret')
    const order   = new MyceliumGear.Order(gateway, 1000, 'ID bd') // Стоимость в рублях
    order
      .send()
      .then((response) => {
        console.dir(response.data)
        // response.json().then((json) => {
        //   /* More computation with object returned from Mycelium Gear. */
        // })
      })
      .catch((error) => {
        console.log('123')
        console.error(error)
      })

  }


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


          <QRcode text="12345" />

        </div>
      </div>;
  }
}

export default Order;