import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Button.styl';

class Button extends Component {
  render() {
    const {to, text} = this.props;
    return (
      <div className="button">
        <Link to={to}>{text}</Link>
      </div>
    );
  }
}

export default Button;
