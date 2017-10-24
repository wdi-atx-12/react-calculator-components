import React, { Component } from 'react';
import './App.css';

class Key extends Component {
  render() {
    return(
      <button className={'button ' + this.props.color}>{this.props.value}</button>
    );
  }
}

export default Key;
