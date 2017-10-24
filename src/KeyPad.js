import React, { Component } from 'react';
import ButtonGroup from './ButtonGroup';

class KeyPad extends Component {
  render() {

    let rows = this.props.rows.map( (row, idx) => (
      <ButtonGroup row={row} />
    ));
    return (
      <div className="keys">
        {rows}
      </div>
    );
  }
}

export default KeyPad;
