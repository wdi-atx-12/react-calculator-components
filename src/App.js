import React, { Component } from 'react';
import Row from './Row.js';
import Display from './Display.js';



import './App.css';

class App extends Component {
  render() { // This is a mess! Let's break this down into components.
    return (
      <div className="App">
        <h1>React Calculator!</h1>
        <div className="box">
          <div className="title">
            <p>GA Instruments TI-WDI</p>
          </div>
          <div className="display">
            <input type="text" readOnly size="18" id="d"/>
          </div>
          <div className="keys">
            <Row color={['gray', 'gray', 'gray', 'pink']} label={['mrc', 'm-', 'm+', '/']} />
            <Row color={['gray', 'gray', 'gray', 'pink']} label={['7', '8', '9', '*']} />
            <Row color={['gray', 'gray', 'gray', 'pink']} label={['4', '5', '6', '-']} />
            <Row color={['gray', 'gray', 'gray', 'pink']} label={['1', '2', '3', '+']} />
            <Row color={['gray', 'gray', 'gray', 'pink']} label={['0', '.', 'C', '=']} />

          </div>
        </div>
      </div>
    );
  }
}

export default App;
