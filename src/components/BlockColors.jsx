import React, { Component } from 'react';
import {COLORS} from "../common/CONSTANTS";


const ColorInput = (props) => {
  const {color, onChange, checked} = props;
  return (
    <label className={color}>
      <input
        type="radio"
        onChange={onChange}
        checked={ checked }
        name="color"
      />
      <span className="checkmark"/>
    </label>
  );
};

class BlockColors extends Component {
  render() {
    const {color, onChangeColor} = this.props;
    return (
      <React.Fragment>
        <div className="blockColor">
          <h3>Цвет</h3>
          <div className="colors">
            {["black", "white", "blue", "red"].map(nextColor => (
              <ColorInput
                key={nextColor}
                color={nextColor}
                checked={ color === COLORS[nextColor.toUpperCase()] }
                onChange={onChangeColor}
              />
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BlockColors;
