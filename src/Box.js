import React, { Component } from 'react';
import Display from './Display';
import Key from './Key';


class Box extends Component {
  render() {
    return (
      <div className="box">
        <div className="title">
          <p>GA Instruments TI-WDI</p>
          <Display />
          <Key />
        </div>
      </div>
    )
  }
}

export default Box;
