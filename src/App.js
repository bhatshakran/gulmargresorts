import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Rooms from './pages/Rooms';
import SingleRoom from './components/SingleRoom';
import About from './pages/About';
export default function App() {
	return (
		<>
			<Navbar />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/rooms' component={Rooms} />
				<Route exact path='/about' component={About} />
				<Route exact path='/rooms/:slug' component={SingleRoom} />
			</Switch>
			<Footer />
		</>
	);
}
