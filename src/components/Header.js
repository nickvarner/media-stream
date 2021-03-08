import React from 'react';
import { Link } from 'react-router-dom';

export default function Header () {
	return (
		<div className='ui secondary pointing menu'>
			<Link to='/' className='item'>
				streamer
			</Link>
			<div className='right menu'>
				<Link to='/' className='item'>
					all streams
				</Link>
			</div>
		</div>
	);
}
