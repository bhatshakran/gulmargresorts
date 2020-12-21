import React from 'react';
import { Link } from 'react-router-dom';
import Title from './Title';

const Banner = () => {
	return (
		<article className='banner'>
			<Title title='Gulmarg Resorts' />
			<h3>The ultimate experience</h3>
			<Link to='/rooms' className='ret-btns'>
				Our Rooms{' '}
			</Link>
		</article>
	);
};

export default Banner;
