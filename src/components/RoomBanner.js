import React from 'react';
import Title from './Title';
import { Link } from 'react-router-dom';
export default function RoomBanner(props) {
	return (
		<article className='room-banner'>
			<Title title={props.title} />
			<Link to='/rooms' className='ret-btns'>
				Back to Rooms
			</Link>
		</article>
	);
}
