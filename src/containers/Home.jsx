import React, { Component } from 'react';
import './Home.styl';
import logo from '../assets/img/logo.png';

class App extends Component {
  render() {
    return (
      <div className="page">
        <h1 className="title">Новое слово в мире технологии и роскоши из россии</h1>

        <img className="logo" src={logo} alt="AURUS" />
      </div>
    );
  }
}

export default App;
