import React, { Component } from 'react';

class Modal extends Component {

	constructor(props) {
		super(props);
		this.state = {
			show: false,
			fullName: 'John Smith',
		};
	}

	handleChange = (e) => {
		const _value = e.target.value;
		this.setState({ 
			fullName: _value
		});
	}

	render() {
		const {state: {fullName}} = this;

		return (
			<div className='modal'>
				<input type="modal__input" placeholder="input" onInput={(e) => this.handleChange(e)} />
				<h1>Hello, {fullName}</h1>
				<button></button>
			</div>
		)
	}
}

export default Modal;