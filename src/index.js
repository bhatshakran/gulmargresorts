import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import HotelProvider from './context/HotelProvider';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
	<HotelProvider>
		<Router>
			<App />
		</Router>
	</HotelProvider>,
	document.getElementById('root')
);
