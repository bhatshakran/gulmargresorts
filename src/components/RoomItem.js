import React from 'react';
import { Link } from 'react-router-dom';

export default function RoomItem({ room }) {
	const { images, price, name, slug } = room;

	return (
		<>
			<article className='room-item'>
				<img src={images[0]} alt='' />
				<h3 className='price'>Rs {price}</h3>
				<h2 className='name'>-{name}</h2>
				<Link to={`/rooms/${slug}`} className='fea-btn'>
					Features
				</Link>
			</article>
		</>
	);
}
