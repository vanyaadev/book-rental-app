import React, { useEffect, useState } from 'react';

const DataContext = React.createContext();

const DataProvider = props => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch('http://localhost:8080/books')
			.then(response => response.json())
			.then(data => setProducts(data));
	}, []);

	return (
		<DataContext.Provider value={products}>
			{props.children}
		</DataContext.Provider>
	);
};

export { DataProvider, DataContext };
