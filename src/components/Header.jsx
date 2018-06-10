import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logoText from '../assets/img/logo_text.jpg';
import './Header.styl';

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <Link to="/">
            <img className="logoText" src={logoText} />
          </Link>

          <nav className="menu">
            <NavLink activeClassName='active' exact to="/">Home</NavLink>
            <NavLink activeClassName='active' to="/senat">Senat</NavLink>
            <NavLink activeClassName='active' to="/configurator">Configurator</NavLink>
            <NavLink activeClassName='active' to="/order">Order</NavLink>
          </nav>

        </header>
        <div className="afterLine gold" />
        <div className="afterLine black" />
      </React.Fragment>
    );
  }
}

export default Header;
