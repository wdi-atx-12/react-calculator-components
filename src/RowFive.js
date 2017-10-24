import React, { Component } from 'react';
import Button from './Button.js';

const rowValueArr = ["0", ".", "C"];



  let buttons = rowValueArr.map((buttonValue, index) => (<Button color={"button black"}
    val={buttonValue} key={index} />))


class FifthRow extends Component {

  render() {
    return(

    <p>
      {buttons}
      <Button color={"button orange"} val="=" />
    </p>
    );
  }
}

export default FifthRow;
