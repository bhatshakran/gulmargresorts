import React from 'react';
import { useContext } from 'react';
import Title from './Title';
import HotelContext from '../context/Context';

// get all unique values
const getUnique = (items, value) => {
	return [...new Set(items.map(item => item[value]))];
};

export default function RoomsFilter() {
	const context = useContext(HotelContext);
	const {
		handleChange,
		type,
		rooms,
		capacity,
		price,
		minPrice,
		maxPrice,
		minSize,
		maxSize,
		breakfast,
		pets,
	} = context;

	// get the types of rooms we have
	let types = getUnique(rooms, 'type');
	//  add  'all' to our list of rooms
	types = ['all', ...types];
	// map to jsx
	types = types.map((item, index) => {
		return (
			<option value={item} key={index}>
				{item}
			</option>
		);
	});

	let people = getUnique(rooms, 'capacity');
	people = people.map((item, index) => {
		return (
			<option value={item} key={index}>
				{item}
			</option>
		);
	});
	return (
		<section className='filter-container'>
			<Title tile='search rooms' />
			<form className='filter-form'>
				<div className='form-group'>
					<label htmlFor='type'>room type</label>
					<select
						name='type'
						id='type'
						value={type}
						className='form-control'
						onChange={handleChange}>
						{types}
					</select>
				</div>
				{/* guests filter */}
				<div className='form-group'>
					<label htmlFor='capacity'>capacity </label>
					<select
						name='capacity'
						id='capacity'
						value={capacity}
						className='form-control'
						onChange={handleChange}>
						{people}
					</select>
				</div>
				{/* room price */}
				<div className='form-group'>
					<label htmlFor='price'>room price:${price}</label>
					<input
						type='range'
						name='price'
						id='price'
						min={minPrice}
						max={maxPrice}
						value={price}
						onChange={handleChange}
						className='form-control'
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='size'>room size</label>
					<input
						type='number'
						name='minSize'
						id='size'
						value={minSize}
						onChange={handleChange}
						className='size-input'
					/>
					<input
						type='number'
						name='maxSize'
						id='size'
						value={maxSize}
						onChange={handleChange}
						className='size-input'
					/>
				</div>
				<div className='form-group'>
					<div className='single-extra'>
						<input
							type='checkbox'
							name='breakfast'
							id='breakfast'
							checked={breakfast}
							onChange={handleChange}
						/>
						<label htmlFor='breakfast'>breakfast</label>
					</div>

					<div className='single-extra'>
						<input
							type='checkbox'
							name='pets'
							id='pets'
							checked={pets}
							onChange={handleChange}
						/>
						<label htmlFor='pets'>pets</label>
					</div>
				</div>
			</form>
		</section>
	);
}
