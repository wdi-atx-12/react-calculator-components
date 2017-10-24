import React, { Component } from 'react';
import './App.css';
import Keys from './Keys.js';
import Display from './Display.js';
import Title from './Title.js';

class Box extends Component {
  render() {
    return (
      <div className="box">
        <Title />
        <Display />
        <Keys />
      </div>
    )
  }
}

export default Box;
