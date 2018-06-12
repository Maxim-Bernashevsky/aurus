import React, { Component } from 'react';
import classNames from "classnames";
import './InputItem.styl';

class InputItem extends Component {
  render() {
    const {name, value, label, onChange, type = "text", options = []} = this.props;

    const Input = {
      text: () => (
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
      ),
      select: () => (
        <select className="item" name={name} onChange={onChange}>
          {options.map((option) => (
            <option
              value={option}
              key={option}
            >
              {option}
            </option>
          ))}
        </select>
      )
    };

    return Input[type]();
  }
}

export default InputItem;
