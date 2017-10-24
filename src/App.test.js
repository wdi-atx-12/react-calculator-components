import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Box from './Box';
import Title from './Title';
import Keys from './Keys';
import Display from './Display'



class Calculator extends Component {
  render() {
    return (
    <div className="App"> </div>
    <div className="box"> </div>
    <div className="title"> </div>
    <div className="display"> </div>
    <div className="keys"> </div>
    );
  }
}



export default Calculator;


//
// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
// });
