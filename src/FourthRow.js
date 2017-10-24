import React, { Component } from 'react';
import Keys from './Keys.js';

const rowValueArr =["1", "2", "3"];

let buttons = rowValueArr.map((buttonValue, index) => (<Keys color={"button black"} val={buttonValue} key={index} />))

class FourthRow extends Component {
  render() {
    return (
    <p>
    {buttons}
    <Keys color={"button pink"} val="+" />
    </p>
    );
  }
}

export default FourthRow;
