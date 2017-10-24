import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

class Display extends Component{
  render(){
    return(
      <div className="display">
        <input type="text" readOnly size="18" id="d"/>

      </div>

    )
  };
};

export default Display;
