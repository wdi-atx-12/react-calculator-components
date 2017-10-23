import React, { Component } from 'react';
import Keys from './Keys';
import Title from './Title';


class Calculator extends Component {
  render() {
    return (
      <div className="box">
        <Title />
        <Keys />
      </div>
    );
  }
}

export default Calculator;
