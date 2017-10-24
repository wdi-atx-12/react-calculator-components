import React, { Component } from 'react';
import Box from './Box';
import Keys from './Keys';
import Display from './Display';
import './App.css';

class App extends Component {
  render() { 
    return (
      <div className="App">
        <h1>React Calculator!</h1>
        <Box />
      </div>
    );
  }
}
export default App;
