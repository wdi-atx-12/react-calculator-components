import React, { Component } from 'react';
import Button from './Button.js';
import './App.css';

class Row extends Component {
  render() {
    return (
      <p>
        <Button className={'button ' + this.props.color[0]} label={this.props.label[0]} />
        <Button className={'button ' + this.props.color[1]} label={this.props.label[1]} />
        <Button className={'button ' + this.props.color[2]} label={this.props.label[2]} />
        <Button className={'button ' + this.props.color[3]} label={this.props.label[3]} />
      </p>
    )
  }
}

export default Row;
