import React, { Component } from 'react';



// where we define Components
class Display extends Component {

  render() {
    return (

      <div className="display">
        <input type={this.props.type} readOnly size={this.props.size} id={this.props.id}/>
      </div>
    );
  }
}

export default Display;
