import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
      super(props);
      this.state= displayValue:'0'
    }
    inputDigit(digit){
      const displayValue = this.state

      this.setState({
        displayValue: string(digit)
      })
    }

    inputDot(){
      const {displayValue} =this.state

      if(displayValue.indexOf('.')===-1{
        this.state({
          displayValue: displayValue+'.'
        })
      })
    }
    ClearDisplay(){
      this.setState({
        displayValue:'0'
      })
    }
    inputSubtract(){

    }
    inputAdd(){

    }
    inputMultiply(){

    }
    inputDivide(){

    }
  render() { // This is a mess! Let's break this down into components.

    return (
      <div className="App">
        <h1>React Calculator!</h1>
        <div className="box">
          <div className="title">
            <p>GA Instruments TI-WDI</p>
          </div>
          <div className="display">
            <input type="text" readOnly size="18" id="d" />
          </div>
          <div className="keys">
            <p>
              <input type="button" className="button gray" value="mrc" />
              <input type="button" className="button gray" value="m-" />
              <input type="button" className="button gray" value="m+" />
              <input type="button" className="button pink" value="/" onClick={()=>this.inputDivide()}/>
            </p>
            <p>
              <input type="button" className="button black" value="7" onClick={()=>this.inputDigit(7)}/>
              <input type="button" className="button black" value="8" onClick={()=>this.inputDigit(8)}/>
              <input type="button" className="button black" value="9" onClick={()=>this.inputDigit(9)}/>
              <input type="button" className="button pink" value="*" onClick={()=>this.inputMultiply()}/>
            </p>
            <p>
              <input type="button" className="button black" value="4" onClick={()=>this.inputDigit(4)}/>
              <input type="button" className="button black" value="5" onClick={()=>this.inputDigit(5)}/>
              <input type="button" className="button black" value="6" onClick={()=>this.inputDigit(6)}/>
              <input type="button" className="button pink" value="-" onClick={()=>this.inputSubtract()}/>
            </p>
            <p>
              <input type="button" className="button black" value="1" onClick={()=>this.inputDigit(1)}/>
              <input type="button" className="button black" value="2" onClick={()=>this.inputDigit(2)}/>
              <input type="button" className="button black" value="3" onClick={()=>this.inputDigit(3)}/>
              <input type="button" className="button pink" value="+" onClick={()=>this.inputAdd()}/>
            </p>
            <p>
              <input type="button" className="button black" value="0" onClick={()=>this.inputDigit(0)}/>
              <input type="button" className="button black" value="." onClick={()=>this.inputDot()}/>
              <input type="button" className="button black" value="C" onClick={()=>this.ClearDisplay()}/>
              <input type="button" className="button orange" value="=" onClick={()=>this.inputEquals()}/>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
