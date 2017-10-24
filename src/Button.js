import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <input type="button" className={"button " + this.props.buttonColor} value={this.props.buttonValue} />
    );
  }
}

export default Button;
