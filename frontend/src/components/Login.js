import React, { Component } from 'react';
import './Login.css';
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
			<div className='login-form'>
				<form action='/examples/actions/confirmation.php' method='post'>
					<h2 className='text-center'>Log in</h2>
					<div className='form-group'>
						<input
							type='text'
							class='form-control'
							placeholder='Username'
							required='required'
							value={this.state.username}
							onChange={this.handleEmailChange}
						/>
					</div>
					<div className='form-group'>
						<input
							type='password'
							className='form-control'
							placeholder='Password'
							required='required'
							value={this.state.password}
							onChange={this.handlePasswordChange}
						/>
					</div>
					<div className='form-group'>
						<button type='submit' className='button' onClick={this.handleLogin}>
							Log in
						</button>
					</div>
					<div className='text-center'>
						<a href='#' className='pull-right'>
							Forgot Password?
						</a>
					</div>
				</form>
				<p className='text-center'>
					<a href='#'>Create an Account</a>
				</p>
			</div>
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
