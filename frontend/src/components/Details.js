import React, { Component } from 'react';
import { DataContext } from '../components/DataProvider';
import { Link } from 'react-router-dom';

export default class Details extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentDidMount() {
		this.setState({ id: this.props.match.params.id });
	}
	render() {
		return (
			<div key={this.state.id}>
				<DataContext.Consumer>
					{value =>
						value.map(prod => {
							if (prod.id == this.state.id) {
								return (
									<div className='container py-5'>
										{/* title */}
										<div className='row'>
											<div className='col-10 mx-auto text-center text-slanted text-blue my-5'>
												<h1>{prod.title}</h1>
											</div>
										</div>
										{/* end of title */}
										<div className='row'>
											<div className='col-10 mx-auto col-md-6 my-3'>
												{/* <img src={img} className='img-fluid' alt='' /> */}
											</div>
											{/* prdoduct info */}
											<div className='col-10 mx-auto col-md-6 my-3 text-capitalize'>
												<h1>model : {prod.title}</h1>
												<h4 className='text-title text-uppercase text-muted mt-3 mb-2'>
													made by :{' '}
													{/* <span className='text-uppercase'>{company}</span> */}
												</h4>
												<h4 className='text-blue'>
													{/* <strong>
														price : <span>$</span>
														{price}
													</strong> */}
												</h4>
												<p className='text-capitalize font-weight-bold mt-3 mb-0'>
													some info about product :
												</p>
												{/* <p className='text-muted lead'>{info}</p> */}
												{/* buttons */}
												<div>
													<Link to='/'>
														{/* <ButtonContainer>back to products</ButtonContainer> */}
													</Link>
													{/* <ButtonContainer
														cart
														// disabled={inCart ? true : false}
														onClick={() => {
															value.addToCart(id);
															value.openModal(id);
														}}>
														{inCart ? 'in cart' : 'add to cart'}
													</ButtonContainer> */}
												</div>
											</div>
										</div>
									</div>
								);
							}
						})
					}
				</DataContext.Consumer>
			</div>
		);
	}
}
