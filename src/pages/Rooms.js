import React from 'react';
import { Link } from 'react-router-dom';
import RoomsContainer from '../components/RoomsContainer';

export default function Rooms() {
	return (
		<>
			<div className='rooms-hero'>
				<article className='room-spec'>
					<p>Welcome to our rooms!</p>
					<Link to='/' className='backHome'>
						Back Home
					</Link>
				</article>
			</div>
			<RoomsContainer />
		</>
	);
}
