import React, { useContext } from 'react';
import Product from './/Product';
import { DataContext } from '../components/DataProvider';

export const ProductList = () => {
	const context = useContext(DataContext);

	return (
		<React.Fragment>
			<div className='py-5'>
				<div className='container'>
					<div className='row'>
						{context.map(prod => (
							<Product product={prod} key={prod.id}></Product>
						))}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};
