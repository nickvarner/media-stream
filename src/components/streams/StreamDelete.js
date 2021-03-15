import React from 'react';
import Modal from '../../components/Modal';
import { useHistory } from 'react-router-dom';

export default function StreamDelete () {
	const history = useHistory();
	const actions = (
		<div>
			<button className='ui button'>cancel</button>
			<button className='ui button negative'>delete</button>
		</div>
	);
	return (
		<div>
			<h1>StreamDelete</h1>
			<Modal
				title='delete stream'
				content='are you sure you want to delete this stream?'
				actions={actions}
				onDismiss={() => history.push('/')}
			/>
		</div>
	);
}
