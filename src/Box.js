import React, { Component } from 'react';
import './App.css';
import Key from './Key';
import Display from './Display';
import Title from './Title';

class Box extends Component {
  render() {
    return (
      <div className="box">
        <Title />
        <Display />
        <Key />
        <h1>React Calculator!</h1>
      </div>
    );
  }
}

export default Box;
