import React, { Component } from 'react';
import Button from './Button';

class ButtonGroup extends Component {
  render() {
    let buttons = this.props.row.map( (button, idx) => (
      <Button buttonColor={button.color} buttonValue={button.value} key={idx}/>
    ));
    return (
      <p>{buttons}</p>

    );
  }
}

export default ButtonGroup;
