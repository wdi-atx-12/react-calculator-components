import React, { Component } from 'react';
import './App.css';
import Display from './Display';
import Keypad from './Keypad';

class Calculator extends Component {
  render() {
    return(
      <div className="box">
        <div className="title">
          <p>{this.props.title}</p>
        </div>
        <Display />
        <Keypad />
      </div>
    );
  }
}

export default Calculator;
