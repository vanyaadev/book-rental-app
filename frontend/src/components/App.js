import React from 'react';
import '../App.css';
import { Route, Switch } from 'react-router-dom';
import { NoMatch } from '../components/NoMatch';
import { NavigationBar } from '../components/NavigationBar';
import { ProductList } from '../components/ProductList';
import Registration from '../components/Registration';
import Login from '../components/Login';
import Details from '../components/Details';

export const App = () => {
	return (
		<React.Fragment>
			<NavigationBar></NavigationBar>
			<Switch>
				<Route exact path='/' component={ProductList} />
				<Route
					exact
					path='/details/:id'
					render={props => <Details {...props}></Details>}
				/>
				<Route exact path='/registration' component={Registration} />
				<Route exact path='/login' component={Login} />
				<Route component={NoMatch} />
			</Switch>
		</React.Fragment>
	);
};
