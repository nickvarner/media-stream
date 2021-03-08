import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import StreamCreate from './streams/StreamCreate';
import StreamList from './streams/StreamList';
import StreamEdit from './streams/StreamEdit';
import StreamShow from './streams/StreamShow';
import StreamDelete from './streams/StreamDelete';

function App () {
	return (
		<div className='app ui container'>
			<BrowserRouter>
				<div>
					<Header />
					<Route path='/' exact component={StreamList} />
					<Route path='/streams/new' exact component={StreamCreate} />
					<Route path='/streams/edit' exact component={StreamEdit} />
					<Route path='/streams/show' exact component={StreamShow} />
					<Route path='/streams/delete' exact component={StreamDelete} />
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
