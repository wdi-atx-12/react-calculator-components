import React, { Component } from 'react';
import Keys from './Keys.js';

const rowValueArr =["4", "5", "6"];

let buttons = rowValueArr.map((buttonValue, index) => (<Keys color={"button black"} val={buttonValue} key={index} />))

class ThirdRow extends Component {
  render() {
    return (
    <p>
    {buttons}
    <Keys color={"button pink"} val="-" />
    </p>
    );
  }
}

export default ThirdRow;
