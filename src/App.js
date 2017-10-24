import React, { Component } from 'react';
import './App.css';
// import Key from './Key';
// import Display from './Display';
// import Title from './Title';
import Box from './Box'

class App extends Component {
  render() { // This is a mess! Let's break this down into components.
    return (
      <div className="App">
        <Box />
      </div>
    );
  }
}

export default App;
