import React, { Component } from 'react';
import Keys from './Keys.js';

const rowValueArr =["0", ".", "C"];

let buttons = rowValueArr.map((buttonValue, index) => (<Keys color={"button black"} val={buttonValue} key={index} />))

class FifthRow extends Component {
  render() {
    return (
    <p>
    {buttons}
    <Keys color={"button orange"} val="=" />
    </p>
    );
  }
}

export default FifthRow;
