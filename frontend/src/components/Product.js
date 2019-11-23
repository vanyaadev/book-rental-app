import React, { Component } from 'react';

import styled from 'styled-components';
import { Link } from 'react-router-dom';

import img from '../logo.png';
export default class Product extends Component {
	state = {};

	render() {
		const {
			id,
			title,
			author,
			publicationDate,
			language,
			pages,
			description
		} = this.props.product;

		const link = '/details/'.concat(id);

		return (
			<ProductWrap
				className='col-9 mx-auto col-md-6 col-lg-3 my-3'
				style={{ maxWidth: '250px' }}>
				<div className='card'>
					<div
						className='img-container p-5'
						onClick={() => console.log('clicked')}>
						<Link to={link}>
							<img src={img} alt='' className='card-img-top' />
						</Link>
						<button
							className='cart-btn'
							onClick={() => {
								console.log('clicked');
							}}>
							<i className='fas fa-cart-plus' />
						</button>
					</div>

					<div className='card-footer d-flex justify-content-between'>
						<p className='align-self-center mb-0'>{title}</p>
						<h5 className='text-blue font-italic mb-0'>{author}</h5>
					</div>
				</div>
			</ProductWrap>
		);
	}
}

const ProductWrap = styled.div`
	.card {
		border-color: transparent;
		transition: all 0.5s linear;
	}
	.card-footer {
		background: transparent;
		border-top: transparent;
		transition: all 0.4s linear;
	}
	&:hover {
		.card {
			border: 0.04rem solid rgba(0, 0, 0, 0.2);
			box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
		}
		.card-footer {
			background: rgba(247, 247, 247);
		}
	}
	.img-container {
		position: relative;
		overflow: hidden;
	}
	.card-img-top {
		transition: all 0.4s linear;
	}
	.img-container:hover .card-img-top {
		transform: scale(1.2);
	}
	.cart-btn {
		position: absolute;
		bottom: 0;
		right: 0;
		padding: 0.2rem 0.4rem;
		background: var(--lightBlue);
		border: none;
		color: var(--mainWhite);
		font-size: 1.4rem;
		border-radius: 0.5rem 0 0 0;
		transform: translate(100%, 100%);
		transition: all 0.4s ease-in-out;
	}
	.img-container:hover .cart-btn {
		transform: translate(0, 0);
	}
	.cart-btn:hover {
		color: var(--mainBlue);
		cursor: pointer;
	}
`;
