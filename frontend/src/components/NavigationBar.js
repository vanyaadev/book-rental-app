import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../logo.png';
import styled from 'styled-components';

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

		<Link to='/cart' className='ml-auto'>
			<ButtonContainer>
				<i className='fas fa-cart-plus'></i>
				<span className='pl-1'>My cart</span>
			</ButtonContainer>
		</Link>
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
