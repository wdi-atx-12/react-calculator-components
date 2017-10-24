import React, { Component } from 'react';

class Title extends Component {
  render() {
    return (
      <div className="title">
        <p>{this.props.value}</p>
      </div>
    );
  }
}

export default Title;
