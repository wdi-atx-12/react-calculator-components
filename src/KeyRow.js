import React, { Component } from 'react';
import './App.css';
import Key from './Key';

class Keypad extends Component {
  render() {
    const rowKeys = this.props.values.map((value, index) => {
      const color = index < this.props.values.length-1
        ? this.props.colors[0]
        : this.props.colors[1];
      return <Key color={color} value={value} key={index} />
    });

    return(
      <p>
        {rowKeys}
      </p>
    );
  }
}

export default Keypad;
