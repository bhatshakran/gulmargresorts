import React from 'react';
import RoomItem from './RoomItem';

export default function RoomsList({ rooms }) {
	console.log(rooms);
	if (rooms.length === 0) {
		return (
			<div className='empty-search'>
				<h3>unfortunately no rooms matched your search parameters</h3>
			</div>
		);
	}
	return (
		<section className='roomslist'>
			<div className='roomslist-center'>
				{rooms.map((item, index) => {
					return <RoomItem room={item} key={index} />;
				})}
			</div>
		</section>
	);
}
