import React, { Component } from 'react';
import './App.css';

class Keys extends Component {
  render() {
    return (

        <input type="button" className={this.props.color} value={this.props.val} />

      );
  }
}

export default Keys;


