import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import logo from '../logo.png';
import styled from 'styled-components';
import './NavigationBar.css';
export const NavigationBar = () => (
	<NavWrap className='navbar navbar-expand-sm  px-sm-5 '>
		<Link to='/'>
			<img
				src={logo}
				alt=''
				className='navbar-brand'
				style={{ width: 45, height: 35, padding: 0, margin: 0 }}
			/>
		</Link>
		<Link
			to='/'
			className='ml-4'
			style={{ color: '#0d310f', fontWeight: 'bold', fontSize: '1.4rem' }}>
			Books
		</Link>

		<div className='ml-auto'>
			<Link className='mr-1' id='dropdown'>
				<ButtonContainer>
					<span className='pl-1'>Login</span>
				</ButtonContainer>
				<div className='dropdown-content'>
					<Login></Login>
				</div>
			</Link>
			<Link to='/cart'>
				<ButtonContainer>
					<i className='fas fa-cart-plus'></i>
					<span className='pl-1'>My cart</span>
				</ButtonContainer>
			</Link>
		</div>
	</NavWrap>
);

const ButtonContainer = styled.button`
	text-transform: capitalized;
	font-size: 1.2rem;
	font-weight: bold;
	background: transparent;
	border: 0.099rem solid #124215;
	border-radius: 0.5rem;
	color: #0d310f;
	padding: 0.5rem;
	transition: all ease-in-out;
	&:hover {
		background: #2f5931;
		color: #000000;
	}
`;

const NavWrap = styled.nav`
	color: #000000;
	background-color: #467449;
`;
