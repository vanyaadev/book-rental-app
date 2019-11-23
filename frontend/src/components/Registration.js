import React, { Component } from 'react';

export default class Registration extends Component {
	state = {
		email: '',
		password: ''
	};
	handleEmailChange = e => {
		this.setState({ email: e.target.value });
	};

	handlePasswordChange = e => {
		this.setState({ password: e.target.value });
	};

	render() {
		return (
			<form>
				<input
					type='text'
					name='email'
					placeholder='Email'
					value={this.state.email}
					onChange={this.handleEmailChange}
				/>
				<input
					type='password'
					name='password'
					placeholder='Password'
					value={this.state.password}
					onChange={this.handlePasswordChange}
				/>
				<button type='button' onClick={this.handleLogin}>
					Login
				</button>
			</form>
		);
	}

	handleLogin = () => {
		fetch('http://localhost:8080/registration', {
			method: 'POST',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(this.state)
		});
	};
}
