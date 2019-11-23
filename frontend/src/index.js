import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import { DataProvider } from './components/DataProvider';
ReactDOM.render(
	<DataProvider>
		<Router>
			<App />
		</Router>
	</DataProvider>,
	document.getElementById('root')
);

serviceWorker.unregister();
