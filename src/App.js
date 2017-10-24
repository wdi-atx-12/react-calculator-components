import React, { Component } from 'react';
import './App.css';
//import Button from './Button.js';
import RowOne from './RowOne.js';
import RowTwo from './RowTwo.js';
import RowThree from './RowThree.js';
import RowFour from './RowFour.js';
import RowFive from './RowFive.js';
import Display from './Display.js';


class App extends Component {
  render() { // This is a mess! Let's break this down into components.
    return (
      <div className="App">
        <h1>React Calculator!</h1>
        <div className="box">
          <div className="title">
            <p>GA Instruments TI-WDI</p>
          </div>
          <Display type={"text"} size={18} id={"d"}/>
          <div className="keys">
            <RowOne />
            <RowTwo />
            <RowThree />
            <RowFour />
            <RowFive />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
