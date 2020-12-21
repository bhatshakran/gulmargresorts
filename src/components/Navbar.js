import React from 'react';
import { FaAlignRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
	state = {
		isOpen: false,
	};

	handleToggle() {
		this.setState({
			isOpen: !this.state.isOpen,
		});
	}

	render() {
		return (
			<nav className={this.state.isOpen ? 'navbar showToggle' : 'navbar'}>
				<div className='nav-container nav-flex'>
					<div className='nav-brand'>
						<h4>
							<Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
								Gulmarg <span> Resorts</span>
							</Link>
						</h4>
					</div>
					<button className='nav-btn' onClick={() => this.handleToggle()}>
						<FaAlignRight className='nav-icon' />
					</button>

					<ul className='nav-items'>
						<li className='nav-item'>
							<a href='/' className='nav-link'>
								Home
							</a>
						</li>
						<li className='nav-item'>
							<Link to='/about' className='nav-link'>
								About
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Navbar;
