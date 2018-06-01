import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faChevronLeft from '@fortawesome/fontawesome-free-solid/faChevronLeft'

import './Order.styl';
import car from '../assets/img/senat5.png';
import Headpage from "../components/Headpage";
import QRcode from "../components/QRcode";

import Websocket from 'react-websocket';

const widthCar = 600;

import MyceliumGear from "../services/myceliumGear"



class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: null
    };
  }

  onUpdateOrder(data) {
    console.dir(JSON.parse(data))

    this.setState({order: JSON.parse(data)});
  }


  componentWillMount(){

    const gateway = new MyceliumGear.Gateway('b0f513c8efd69075750b8c55b5b64f1a356ad05e83d2db22eac3e4cf74f56f0d', 'gateway-secret')
    const order   = new MyceliumGear.Order(gateway, 18600000, 'ID bd') // Стоимость в satoshy

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

    setTimeout(() => {
      order.cancel()
    }, 1000)

  }


  render() {
    const {order} = this.state;

    return <div className="page">
        <Headpage mainTitle="Время быть первым" width={widthCar} title="Senat" subTitle="седан">
          <img width={widthCar} src={car} alt="AURUS Senat" style={{ transform: `translate(calc(50% - ${widthCar - 80}px), ${100}px)` }} />
        </Headpage>

        <div className="bodyPage">
          <Link to="/configurator" className="buttonBack">
            <FontAwesomeIcon icon={faChevronLeft} size="xs" transform={{ y: 3, x: -3 }} />
            Конфигуратор
          </Link>


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

          <div className="blockPayment">
            <div className="qrPay">
              <h3>Отсканируйте</h3>
              <QRcode text="b0f513c8efd69075750b8c55b5b64f1a356ad05e83d2db22eac3e4cf74f56f0d" size={225} />

              <div>При оплате комиссия не взымается</div>
            </div>
            <div className="middleText">
              или
            </div>
            <div className="classicPay">

              <h3>Оплатите</h3>

              <div>
                <div className="priceInBtc">
                  {order && order.amount_in_btc} btc
                </div>
                <div className="toAccount">на счет:</div>
                <div className="addressPay">
                  {order && order.address}
                </div>
                <div className="moreInfo">
                  <div>i</div>
                  Информация как произвести платеж
                </div>

                <Websocket
                  url='ws://gateway.gear.mycelium.com/gateways/b0f513c8efd69075750b8c55b5b64f1a356ad05e83d2db22eac3e4cf74f56f0d/orders/333346/websocket'
                  onMessage={this.onUpdateOrder.bind(this)}
                />
              </div>

            </div>
          </div>






        </div>
      </div>;
  }
}

export default Order;