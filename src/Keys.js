import React, { Component } from 'react';
import './App.css';

class Keys extends Component {
  render() {
    return (
      <div className="keys">
        <p>
          <input type="button" className="button gray" value="mrc" />
          <input type="button" className="button gray" value="m-" />
          <input type="button" className="button gray" value="m+" />
          <input type="button" className="button pink" value="/" />
        </p>
        <p>
          <input type="button" className="button black" value="7" />
          <input type="button" className="button black" value="8" />
          <input type="button" className="button black" value="9" />
          <input type="button" className="button pink" value="*" />
        </p>
        <p>
          <input type="button" className="button black" value="4" />
          <input type="button" className="button black" value="5" />
          <input type="button" className="button black" value="6" />
          <input type="button" className="button pink" value="-" />
        </p>
        <p>
          <input type="button" className="button black" value="1" />
          <input type="button" className="button black" value="2" />
          <input type="button" className="button black" value="3" />
          <input type="button" className="button pink" value="+" />
        </p>
        <p>
          <input type="button" className="button black" value="0" />
          <input type="button" className="button black" value="." />
          <input type="button" className="button black" value="C" />
          <input type="button" className="button orange" value="=" />
        </p>
      </div>
    )
  }
}

export default Keys;
