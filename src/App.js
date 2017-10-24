import React, { Component } from 'react';
import Button from './Button.js'
import './App.css';
import FirstRow from './RowOne.js';
import SecondRow from './RowTwo.js';
import ThirdRow from './RowThree.js';
import FourthRow from './RowFour.js';
import FifthRow from './RowFive.js';

class App extends Component {
  render() {
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
            <FirstRow />
            <SecondRow />
            <ThirdRow />
            <FourthRow />
            <FifthRow />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
