import React, { Component } from 'react';
import './App.css';
import KeyRow from './KeyRow';

class Keypad extends Component {
  render() {
    const keyData = [
      {
        colors: ['gray', 'pink'],
        values: ['mrc', 'm-', 'm+', '/']
      },
      {
        colors: ['black', 'pink'],
        values: ['7', '8', '9', '*']
      },
      {
        colors: ['black', 'pink'],
        values: ['4', '5', '6', '-']
      },
      {
        colors: ['black', 'pink'],
        values: ['1', '2', '3', '+']
      },
      {
        colors: ['black', 'orange'],
        values: ['0', '.', 'C', '=']
      }
    ]

    const keyRows = keyData.map((el, index) => {
      return <KeyRow colors={el.colors} values={el.values} key={index} />
    });

    return(
      <div className="keys">
        {keyRows}
      </div>
    );
  }
}

export default Keypad;
