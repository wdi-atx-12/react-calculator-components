import React, { Component } from 'react';
import Display from './Display.js';
import Row from './Row.js';
import './index.css';
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
            <Display />
          </div>
          <div className="keys">
              <Row color={['gray', 'gray', 'gray', 'pink']} label={['mrc', 'm-', 'm+', '/']} />
              <Row color={['black', 'black', 'black', 'pink']} label={['7', '8', '9', '*']} />
              <Row color={['black', 'black', 'black', 'pink']} label={['4', '5', '6', '-']} />
              <Row color={['black', 'black', 'black', 'pink']} label={['1', '2', '3', '+']} />
              <Row color={['black', 'black', 'black', 'orange']} label={['0', '.', 'C', '=']} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
