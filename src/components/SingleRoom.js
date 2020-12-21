import React from 'react';
import { useContext } from 'react';
import HotelContext from '../context/Context';
import StyledHero from '../components/StyledHero';
import { Link } from 'react-router-dom';
import RoomBanner from './RoomBanner';

const SingleRoom = props => {
	const context = useContext(HotelContext);
	const { getRoom } = context;
	const room = getRoom(props.match.params.slug);
	console.log(room);
	if (!room) {
		return (
			<div className='error'>
				<h3>no such room found...</h3>
				<Link to='/rooms' className='btn-primary'>
					back to rooms
				</Link>
			</div>
		);
	}
	const {
		name,
		size,
		capacity,
		type,
		description,
		images,
		extras,
		breakfast,
		pets,
		price,
	} = room;
	const [mainImg, ...remImg] = images;

	return (
		<>
			<StyledHero img={mainImg}>
				<RoomBanner title={name} />
			</StyledHero>
			<section className='images-section'>
				{remImg.map((item, index) => {
					return <img src={item} alt='Images' key={index} />;
				})}
			</section>

			<section className='room-info'>
				<article className='room-desc'>
					<h3>Description:</h3>
					{description}
				</article>
				<article className='room-bio-center'>
					<p className='room-bio'>Name: {name}</p>
					<p className='room-bio'>Size: {size}</p>
					<p className='room-bio'>capacity: {capacity}</p>
					<p className='room-bio'>Price: Rs {price}</p>
					<p className='room-bio'>{breakfast ? 'Breakfast Included' : ''}</p>
					<p className='room-bio'>{pets ? 'Pets Included' : ''}</p>
					<p className='room-bio'>Type: {type}</p>
				</article>
				<article className='extras'>
					<h3>Extras:</h3>
					<ul>
						{extras.map((extra, index) => {
							return <li key={index}>{extra}</li>;
						})}
					</ul>
				</article>
			</section>
		</>
	);
};
export default SingleRoom;
