import React, { Component } from 'react';
import Title from './Title';
import Display from './Display';
import Keys from './Keys';

class Box extends Component {
  render() {
    return (
        <div className="box">
          <Title />
          <Display />
          <Keys />
        </div>
    );
  }
}

export default Box;
