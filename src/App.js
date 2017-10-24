import React, { Component } from 'react';
import './App.css';
import Calculator from './Calculator';

class App extends Component {
  render() { // This is a mess! Let's break this down into components.
  //break down into calculator, row, button
  //calculator props: title, display, keys the value and the class name
    const buttonsObj=[
      ['mrc', 'button gray'],
      ['m-' , 'button gray'],
      ['m+' , 'button gray'],
      ['/' , 'button pink'],
      ['7' , 'button black'],
      ['8' , 'button black'],
      ['9' , 'button black'],
      ['*' , 'button pink'],
      ['4' , 'button black'],
      ['5' , 'button black'],
      ['6' , 'button black'],
      ['-' , 'button pink'],
      ['1' , 'button black'],
      ['2' , 'button black'],
      ['3' , 'button black'],
      ['+' , 'button pink'],
      ['0' , 'button black'],
      ['.' , 'button black'],
      ['C' , 'button black'],
      ['=' , 'button pink']
    ]
    return (
      <div className="App">
        <h1>React Calculator!</h1>
        <Calculator title={'Ayylmao'} display={'input goes here'} keys={buttonsObj}/>
      </div>
    );
  }
}

export default App;
