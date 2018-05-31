import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logoText from '../assets/img/logo_text.png';
import './Header.styl';

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <img className="logoText" src={logoText} />

          <ul className="menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/senat">Senat</Link></li>
            <li><Link to="/configurator">Configurator</Link></li>
            <li><Link to="/order">Order</Link></li>
          </ul>

        </header>
        <div className="afterLine gold" />
        <div className="afterLine black" />
      </React.Fragment>
    );
  }
}

export default Header;
