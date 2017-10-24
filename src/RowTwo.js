import React, { Component } from 'react';
import Button from './Button.js';

const rowValueArr = ["7", "8", "9"];

let buttons = rowValueArr.map((buttonValue, index) => (<Button color={"button black"} val={buttonValue} key={index} />))

// where we define Components
class RowOne extends Component {

  render() {
    return (

      <p>
        {buttons}
        <Button color={"button pink"} val="*" />
      </p>
    );
  }
}

export default RowOne;
