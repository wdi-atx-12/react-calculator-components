import React, { Component } from 'react';
import Calculator from './Calculator.js';
// import Keys from './Keys.js';
import FirstRow from './FirstRow.js';
import SecondRow from './SecondRow.js';
import ThirdRow from './ThirdRow.js';
import FourthRow from './FourthRow.js';
import FifthRow from './FifthRow.js';
import './App.css';

class App extends Component {
  render() {
    return (
    <div className="App">
    <h1>{this.props.app}</h1>
      <div className="box">
        <div className="title">
            <p>{this.props.title}</p>
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
};
};

export default App;
