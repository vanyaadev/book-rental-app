import React, { Component } from 'react';

export default class Login extends Component {
	state = {
		username: '',
		password: ''
	};
	handleEmailChange = e => {
		this.setState({ username: e.target.value });
	};

	handlePasswordChange = e => {
		this.setState({ password: e.target.value });
	};

	render() {
		return (
			<form action='/'>
				<input
					type='text'
					name='username'
					placeholder='Username '
					value={this.state.username}
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
		fetch('http://localhost:8080/authentication', {
			method: 'POST',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(this.state)
		})
			.then(response => response.json())
			.then(data => {
				localStorage.setItem('token', data.token);
				window.location.href = 'http://localhost:3000';
			})
			.catch();
	};
}
