import React, { Component } from 'react';
import Button from './Button.js';

const rowValueArr = ["mrc", "m-", "m+"];



  let buttons = rowValueArr.map((buttonValue, index) => (<Button color={"button gray"}
    val={buttonValue} key={index} />))


class RowOne extends Component {

  render();
    return();

    <p>
      {buttons}
      <Button color={"button pink"} val="/" />
    </p>
    );
  }
}

export default RowSix;
