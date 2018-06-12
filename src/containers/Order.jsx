import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import OrderDetails from "../components/OrderDetails"
import { getColorName, getInteriorName, lsOrderKey } from '../common/CONSTANTS'
import './Order.styl';
import car from '../assets/img/senat5.png';
import Headpage from "../components/Headpage";
import QRcode from "../components/QRcode";
import Websocket from 'react-websocket';
const widthCar = 600;
import MyceliumGear from "../services/myceliumGear"
import {getPrice, getTextPrice, getTotalPrice} from '../common/price';
import fb from '../services/firebase';

import {LoadingComponent} from "./AsyncComponent"

const HeadBlock = (props) => (
  <React.Fragment>
    <Headpage mainTitle="Время быть первым" width={widthCar} title="Senat" subTitle="седан">
      <img
        width={widthCar}
        src={car}
        alt="AURUS Senat"
        style={{ transform: `translate(calc(50% - ${widthCar - 80}px), ${100}px)` }}
      />
    </Headpage>
    {props.loading && <LoadingComponent/>}
  </React.Fragment>
);

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

  getConfiguratorData = () => {
    const sessionData = JSON.parse(sessionStorage.getItem(lsOrderKey));
    this.configuratorData = sessionData;

    if(!sessionData) {
      fb.on("value", snapshot => {
          const orderID = localStorage.getItem(lsOrderKey);
          this.configuratorData = snapshot.val().orders[orderID];
          console.log(this.configuratorData);
        },
        error => console.log("Error: " + error.code)
      );
    }
  };

  getOrder = () => {
    const gateway = new MyceliumGear.Gateway('b0f513c8efd69075750b8c55b5b64f1a356ad05e83d2db22eac3e4cf74f56f0d', 'gateway-secret')
    const order   = new MyceliumGear.Order(gateway, 18600000, 'ID bd') // Стоимость в satoshy

    order
      .send()
      .then((response) => {
        // console.dir(response.data)
        this.setState({order: response.data});
        // response.json().then((json) => {
        //   /* More computation with object returned from Mycelium Gear. */
        // })
      })
      .catch((error) => {
        console.error(error)
      })

    // setTimeout(() => {
    //   order.cancel()
    // }, 1000)
  };

  componentWillMount(){
    this.price = getPrice.senat;

    this.getConfiguratorData();
    this.getOrder();
  }

  render() {
    if(!this.configuratorData) return (<HeadBlock loading/>);

    const {color, interior, options, model} = this.configuratorData;
    const {order} = this.state;

    return (
      <div className="page">

        <HeadBlock />

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
            model={model}
          />

          <table className="totalPrice">
            <tbody>
              <tr>
                <td className="orderInfoLabel">Итоговая цена</td>
                <td className="orderInfoValue">{getTextPrice(getTotalPrice(this.configuratorData))} <sub>&#8381;</sub></td>
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
      </div>
    )
  }
}

export default Order;