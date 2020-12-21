import React, { Component } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';
class Home extends Component {
	render() {
		return (
			<>
				<Hero />
				<Services />
				<FeaturedRooms />
			</>
		);
	}
}

export default Home;
