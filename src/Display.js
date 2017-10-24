import React, { Component } from 'react';
import './App.css';

class Display extends Component {
  render() {
    return (
      <div className="display">
        <input type="text" readOnly size="18" id="d"/>
      </div>
    )
  }
}

export default Display;
