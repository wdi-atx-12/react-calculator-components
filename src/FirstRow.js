import React, { Component } from 'react';
import Keys from './Keys.js';

const rowValueArr =["mrc", "m-", "m+"];

let buttons = rowValueArr.map((buttonValue, index) => (<Keys color={"button gray"} val={buttonValue} key={index} />))

class FirstRow extends Component {
  render() {
    return (
    <p>
    {buttons}
    <Keys color={"button pink"} val="/" />
    </p>
    );
  }
}

export default FirstRow;
