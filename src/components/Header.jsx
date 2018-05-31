import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.svg';
import './Header.styl';

class Header extends Component {
  render() {
    return (
        <header className="App-header">

          <img className="App-logo" src={logo} width={190} height={190}/>

          <h1 className="App-title">AURUS</h1>

          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/senat">Senat</Link></li>
            <li><Link to="/configurator">Configurator</Link></li>
            <li><Link to="/order">Order</Link></li>
          </ul>

        </header>
    );
  }
}

export default Header;
