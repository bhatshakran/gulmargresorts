import React from 'react';
import {
	FaGolfBall,
	FaHiking,
	FaSnowboarding,
	FaWifi,
	FaSkiing,
} from 'react-icons/fa';
const Services = () => {
	return (
		<>
			<h1 className='headings'>Services</h1>
			<section className='services'>
				<div className='service-center'>
					<div className='service-item'>
						<FaSkiing className='service-icon' />
						<h3>Alpine Skiing</h3>
						<p>
							If you’ve had enough of the resort’s popular slopes, you can set
							out on your own adventure by exploring some hills in the
							backcountry areas. You can find some challenging slopes with fresh
							powdery snow in these spots.
						</p>
					</div>
					<div className='service-item'>
						<FaGolfBall className='service-icon' />
						<h3>Summer Golf League</h3>
						<p>
							Play outdoors and swing your arms. Playing in the expanse of
							stretched out greenery is a luxury in itself.
						</p>
					</div>
					<div className='service-item'>
						<FaWifi className='service-icon' />
						<h3>Free High Speed Wifi</h3>
						<p>
							Enjoy your stay with ultra high speed internet, and connect with
							your friends and family without any hassle.
						</p>
					</div>
					<div className='service-item'>
						<FaHiking className='service-icon' />
						<h3>Hiking</h3>
						<p>
							We have some crazy hills here. You can hike the mountains and
							enjoy the fresh air and the breathtaking views too!
						</p>
					</div>
					<div className='service-item'>
						<FaSnowboarding className='service-icon' />
						<h3>Adventurous Snowboarding</h3>
						<p>
							Every year we organize winter festivals for our members, you can
							register for it for free and take part in some of the amazing cool
							games we have!
						</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default Services;
