import React, { Component } from 'react';
import classNames from "classnames";
import './InputItem.styl';

class InputItem extends Component {
  render() {
    const {name, value, label, onChange} = this.props;
    return (
      <div className="formItem">
        <input
          type="text"
          name={name}
          onChange={onChange}
          value={value}
        />
        <label
          className={classNames({"inputFill": value.length > 0})}
        >{label}</label>
      </div>
    );
  }
}

export default InputItem;
