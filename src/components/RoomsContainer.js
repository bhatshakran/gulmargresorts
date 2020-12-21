import React from 'react';
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';
import { useContext } from 'react';
import HotelContext from '../context/Context';
import Spinner from './Spinner';
const RoomsContainer = () => {
	const context = useContext(HotelContext);

	const { loading, sortedRooms, rooms } = context;
	console.log(sortedRooms);
	if (loading) {
		return <Spinner />;
	}

	return (
		<>
			<RoomFilter rooms={rooms} />
			<RoomList rooms={sortedRooms} />
		</>
	);
};

export default RoomsContainer;
