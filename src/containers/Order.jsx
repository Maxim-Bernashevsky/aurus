import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import OrderDetails from "../components/OrderDetails"
import {COLORS, INTERIORS, INTERIOR_TEXT, getColorName, getInteriorName} from '../common/CONSTANTS'


import './Order.styl';
import car from '../assets/img/senat5.png';
import Headpage from "../components/Headpage";
import QRcode from "../components/QRcode";

import Websocket from 'react-websocket';

const widthCar = 600;

import MyceliumGear from "../services/myceliumGear"
import {getPrice} from '../common/price';



class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: null,
    };
  }

  onUpdateOrder(data) {
    console.dir(JSON.parse(data))

    this.setState({order: JSON.parse(data)});
  }


  componentWillMount(){
    this.price = getPrice.senat;


    this.setState({
      color: COLORS.BLACK,
      interior: INTERIORS.OLIVA,
      options: ["premiumPack"]
    });


    const gateway = new MyceliumGear.Gateway('b0f513c8efd69075750b8c55b5b64f1a356ad05e83d2db22eac3e4cf74f56f0d', 'gateway-secret')
    const order   = new MyceliumGear.Order(gateway, 18600000, 'ID bd') // Стоимость в satoshy

    order
      .send()
      .then((response) => {
        console.dir(response.data)
        this.setState({order: response.data});
        // response.json().then((json) => {
        //   /* More computation with object returned from Mycelium Gear. */
        // })
      })
      .catch((error) => {
        console.log('123')
        console.error(error)
      })

    // setTimeout(() => {
    //   order.cancel()
    // }, 1000)

  }


  render() {
    const {order, color, interior, options} = this.state;

    return <div className="page">
        <Headpage mainTitle="Время быть первым" width={widthCar} title="Senat" subTitle="седан">
          <img width={widthCar} src={car} alt="AURUS Senat" style={{ transform: `translate(calc(50% - ${widthCar - 80}px), ${100}px)` }} />
        </Headpage>

        <div className="bodyPage">
          <div className="leftButton">
            <Link to="/configurator" className="buttonBack">
              {'<'} {/* TODO pretier */}
              Конфигуратор
            </Link>
          </div>

          <OrderDetails
            color={getColorName(color)}
            interior={getInteriorName(interior)}
            price={this.price}
            options={options}
          />

          <table className="totalPrice">
            <tbody>
              <tr>
                <td className="orderInfoLabel">Итоговая цена</td>
                <td className="orderInfoValue">8 600 000 <sub>&#8381;</sub></td>
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
                  url='ws://gateway.gear.mycelium.com/gateways/b0f513c8efd69075750b8c55b5b64f1a356ad05e83d2db22eac3e4cf74f56f0d/orders/111/websocket'
                  onMessage={this.onUpdateOrder.bind(this)}
                />
              </div>

            </div>
          </div>

          <hr/>
          <div>! LOADER !</div>
          <hr/>

        </div>
      </div>;
  }
}

export default Order;