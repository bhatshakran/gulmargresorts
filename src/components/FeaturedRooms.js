import React from 'react';
import HotelContext from '../context/Context';
import { useContext } from 'react';
import Spinner from './Spinner';
import RoomItem from './RoomItem';

const FeaturedRooms = () => {
	const context = useContext(HotelContext);
	console.log(context);
	const { featuredRooms: rooms, loading } = context;
	const renderRooms = () => {
		if (loading) {
			return <Spinner />;
		} else {
			return rooms.map((room, index) => {
				return <RoomItem room={room} key={index} />;
			});
		}
	};
	return (
		<>
			<h1 className='headings'>Featured Rooms</h1>
			<section className='featured'>{renderRooms()}</section>
		</>
	);
};

export default FeaturedRooms;
