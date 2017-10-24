import React, { Component } from 'react';


class Button extends Component {

  render() {
    return(
        <input type="button" className={this.props.color} value={this.props.val} />
      );
  }
}

export default Button;
