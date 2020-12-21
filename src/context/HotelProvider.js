import React, { Component } from 'react';
import Client from '../Contentful';
import HotelContext from './Context';
class HotelProvider extends Component {
	state = {
		featuredRooms: [],
		loading: true,
		rooms: [],
		sortedRooms: [],
		type: 'all',
		capacity: 1,
		price: 0,
		minPrice: 0,
		maxPrice: 0,
		minSize: 0,
		maxSize: 0,
		breakfast: false,
		pets: false,
	};
	async componentDidMount() {
		try {
			let response = await Client.getEntries({
				content_type: 'gulmargResort',
			});
			const actRooms = this.formatRooms(response.items);
			let maxPrice = Math.max(...actRooms.map(item => item.price));
			let maxSize = Math.max(...actRooms.map(item => item.size));
			this.setState({
				featuredRooms: actRooms.filter(item => item.featured),
				loading: false,
				rooms: actRooms,
				sortedRooms: actRooms,
				price: maxPrice,
				maxPrice,
				maxSize,
			});
		} catch (error) {
			console.log(error);
		}
	}

	// formata the data received from backend
	formatRooms = items => {
		let tempRooms = items.map(item => {
			let id = item.sys.id;
			let images = item.fields.images.map(image => {
				return image.fields.file.url;
			});
			let room = { ...item.fields, id, images };
			return room;
		});
		return tempRooms;
	};

	// get a room if a user tries to access certain room using its route
	getRoom = slug => {
		let tempRooms = [...this.state.rooms];
		const room = tempRooms.find(room => room.slug === slug);
		return room;
	};
	// handle the change when the user filters his search
	handleChange = event => {
		const type = event.target.type;
		const name = event.target.name;
		const value =
			type === 'checkbox' ? event.target.checked : event.target.value;
		this.setState(
			{
				[name]: value,
			},
			this.filterRooms
		);
	};
	filterRooms = () => {
		let {
			rooms,
			type,
			capacity,
			price,
			minSize,
			maxSize,
			breakfast,
			pets,
		} = this.state;
		// transform value
		capacity = parseInt(capacity);
		price = parseInt(price);
		let tempRooms = [...rooms];
		// filter by type
		if (type !== 'all') {
			tempRooms = tempRooms.filter(room => room.type === type);
		}
		// filter by capacity
		if (capacity !== 1) {
			tempRooms = tempRooms.filter(room => room.capacity >= capacity);
		}
		// filter by price
		tempRooms = tempRooms.filter(room => room.price < price);

		// filter by size
		tempRooms = tempRooms.filter(
			room => room.size >= minSize && room.size <= maxSize
		);
		// filter by breakfast
		if (breakfast) {
			tempRooms = tempRooms.filter(room => room.breakfast);
		}

		// filter by pets
		if (pets) {
			tempRooms = tempRooms.filter(room => room.pets);
		}

		// set the state
		this.setState({
			sortedRooms: tempRooms,
		});
	};
	render() {
		return (
			<HotelContext.Provider
				value={{
					...this.state,
					getRoom: this.getRoom,
					handleChange: this.handleChange,
				}}>
				{this.props.children}
			</HotelContext.Provider>
		);
	}
}

export default HotelProvider;
