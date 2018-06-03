import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Button.styl';

class Button extends Component {
  render() {
    const {to, text} = this.props;
    return (
      <div className="button">
        <div className="buttonBG"/>
        <div className="goldLight" />
        <div className="whiteLight" />
        <Link to={to}>{text}</Link>
      </div>
    );
  }
}

export default Button;
