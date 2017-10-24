import React, {Component} from 'react';
import './App.css';
class Calculator extends Component{
	render(){
		const buttons = this.props.keys.map((el,idx)=><input type="button" className={el[1]} value={el[0]} key={idx}/>)
		return(
		<div className='box'>

			<p className='title'>{this.props.title}</p>
			<div className='display'>
				<input type="text" readOnly size="18" id="d"/>
			</div>
			<div className='keys'>
				<p>{buttons.slice(0,4)}</p>
				<p>{buttons.slice(4,8)}</p>
				<p>{buttons.slice(8,12)}</p>
				<p>{buttons.slice(12,16)}</p>
				<p>{buttons.slice(16,20)}</p>
			</div>
		</div>
		);
	}
}
export default Calculator