import React, { Component } from 'react';
import './App.css';
import Calculator from './Calculator';

class App extends Component {
  render() { // This is a mess! Let's break this down into components.
    return (
      <div className="App">
        <h1>React Calculator!</h1>
        <Calculator title={'GA Instruments TI-WDI'} />
      </div>
    );
  }
}

export default App;
