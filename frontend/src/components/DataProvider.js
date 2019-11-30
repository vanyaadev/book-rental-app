import React, { useEffect, useState } from 'react';

const DataContext = React.createContext();

const DataProvider = props => {
	const [products, setProducts] = useState([]);

	let authToken = localStorage.getItem('token');

	useEffect(() => {
		fetch('http://localhost:8080/books', {
			headers: {
				'Content-Type': 'application/json',
				Authorization: authToken
			}
		})
			.then(response => response.json())
			.then(data => setProducts(data))
			.catch(error => setProducts([]));
	}, []);

	return (
		<DataContext.Provider value={products}>
			{props.children}
		</DataContext.Provider>
	);
};

export { DataProvider, DataContext };
