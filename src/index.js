import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Calculator from './Calculator';
import Keys from './Keys.js';
import './index.css';


// const value = ["mrc", "m-", "m+", "/", "0","1","2","3","4","5","6", "7", "8", "9", "*", "+", "-", ".", "=", "C"];
// const className = ["button gray", "button pink", "button black", "button orange"];
// const type = ["button"];

const calculator ={
  app: "React Calculator!",
  title: "GA Instruments TI-WDI",
  keys: ["Hi","Hi","Hi"]
};


ReactDOM.render(
  <App app={calculator.app} title={calculator.title} keys={calculator.keys}/>,
  document.getElementById('root')
);


