import React, { Component } from 'react';
import Box from './Box.js';
import './App.css';

class App extends Component {
  render() { // This is a mess! Let's break this down into components.
    return (
      <div className="App">
        <h1>React Calculator!</h1>
        <Box />
      </div>
    );
  }
}

export default App;
