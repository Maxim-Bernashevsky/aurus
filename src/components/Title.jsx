import React, { Component } from 'react';
import './Title.styl';

class Title extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="title">
          {this.props.text}
        </div>
        <div className="lineAfterTitle" />
      </React.Fragment>
    );
  }
}


export default Title;
