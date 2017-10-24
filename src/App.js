import React, { Component } from 'react';
import Title from './Title';
import Display from './Display';
import Keys from './Keys'
import './App.css';

class App extends Component {
  render() { // This is a mess! Let's break this down into components.
    return (
      <div className="App">
        <h1>React Calculator!</h1>
        <div className="box">
          <Title />
          <Display />
          <Keys />
        </div>
      </div>
    );
  }
}

export default App;
