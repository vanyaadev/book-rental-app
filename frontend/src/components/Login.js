import React, { Component } from 'react';

export default class Login extends Component {
	state = {
		username: '',
		password: ''
	};

	handleUsernameChange = e => {
		this.setState({ username: e.target.value });
	};

	handlePasswordChange = e => {
		this.setState({ password: e.target.value });
	};

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
			.then(data => localStorage.setItem('token', data.token))
			.catch(error => console.log(error));
	};

	render() {
		return (
			<form>
				<input
					type='text'
					name='username'
					placeholder='Username'
					value={this.state.username}
					onChange={this.handleUsernameChange}
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
}
