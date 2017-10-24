import React, { Component } from 'react';

import './App.css';

class Calculator extends Component {
  render(){
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
        <p>{this.props.keys}</p>
        </div>
      </div>
    </div>
    );
  }
}



export default Calculator;
