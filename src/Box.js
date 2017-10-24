import React, { Component } from 'react';
import Keys from './Keys';
import Display from './Display';


class Box extends Component {
  render() {
    return (
      <div className="box">
        <div className="title">
          <p>GA Instruments TI-WDI</p>
          <Display />
          <Keys />
        </div>
      </div>
    )
  }
}

export default Box;
