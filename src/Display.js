import React, { Component } from 'react';

class Display extends Component {
  render() {
    return (
      <div className="display">
        <input type="text" readOnly  size={this.props.size} id={this.props.id}/>
      </div>
    );
  }
}

export default Display;
