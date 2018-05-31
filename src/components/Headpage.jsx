import React, { Component } from 'react';
import Title from "./Title";
import './Headpage.styl';

class Headpage extends Component {
  render() {
    const {mainTitle, title, subTitle, width} = this.props;
    return (
      <React.Fragment>
        <Title text={mainTitle} />
        <div className="headPage">

          <div className="goldline" />

          {this.props.children}

          <div>
            <div className="imgTitle" style={{left: `calc(50% - ${width / 2}px)`}}>{title}</div>
            <div className="imgSubTitle" style={{left: `calc(50% - ${width / 2}px)`}}>{subTitle}</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}


export default Headpage;
