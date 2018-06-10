import React from 'react';
import './Home.styl';
import logo from '../assets/img/logo.webp';
import Button from "../components/Button";

class Home extends React.Component {
  render() {
    return (
      <div className="page home">
        <h1 className="title titleHome">Новое слово в мире технологии и роскоши из россии</h1>

        <img className="logo" src={logo} alt="AURUS" />

        <Button text="Заказать" to="/senat"/>

        <div className="bgHome" />
      </div>
    );
  }
}

export default Home;
