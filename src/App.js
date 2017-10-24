import React, { Component } from 'react';
import KeyPad from './KeyPad';
import Display from './Display';

import Title from './Title';
import './App.css';

class App extends Component {
  render() { // This is a mess! Let's break this down into components.

  const rows = //{
    //numbers => color: "black", values :[0-9]
    //operators => color: "pink", values :["/","*","-","+"]
    //controls => color: "gray", values: ["mrc","m-","m+"]
    //equals => color: "orange", value: "="
    // row1: [ {color: "gray", value: "mrc"}, {color: "gray", value: "m-"}, {color: "gray", value: "m+"}, {color: "pink", value: "/"}],
    // row2: [ {color: "black", value: "7"}, {color: "black", value: "8"}, {color: "black", value: "9"}, {color: "pink", value: "*"}],
    // row3: [ {color: "black", value: "4"}, {color: "black", value: "5"}, {color: "black", value: "6"}, {color: "pink", value: "-"}],
    // row4: [ {color: "black", value: "1"}, {color: "black", value: "2"}, {color: "black", value: "3"}, {color: "pink", value: "+"}],
    // row5: [ {color: "black", value: "0"}, {color: "black", value: "."}, {color: "black", value: "C"}, {color: "orange", value: "="}]
    [
      [ {color: "gray", value: "mrc"}, {color: "gray", value: "m-"}, {color: "gray", value: "m+"}, {color: "pink", value: "/"}], //row1
      [ {color: "black", value: "7"}, {color: "black", value: "8"}, {color: "black", value: "9"}, {color: "pink", value: "*"}],   //row2
      [ {color: "black", value: "4"}, {color: "black", value: "5"}, {color: "black", value: "6"}, {color: "pink", value: "-"}],   //row3
      [ {color: "black", value: "1"}, {color: "black", value: "2"}, {color: "black", value: "3"}, {color: "pink", value: "+"}],   //row4
      [ {color: "black", value: "0"}, {color: "black", value: "."}, {color: "black", value: "C"}, {color: "orange", value: "="}]  //row5
    ];
    //};
    return (
      <div className="App">
        <h1>React Calculator!</h1>
        <div className="box">
          <Title value={"GA Instruments TI-WDI"} />
          <Display size={"15"} id={"d"} />
          <KeyPad rows={rows} />
        </div>
      </div>
    );
  }
}

export default App;
