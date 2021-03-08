import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const PageOne = () => {
	return <div className='PageOne'>Page One</div>;
};

const PageTwo = () => {
	return (
		<div className='PageTwo'>
			Page Two
			<button>click me</button>
		</div>
	);
};

function App () {
	return (
		<div className='app'>
			<BrowserRouter>
				<div>
					<Route path='/' exact component={PageOne} />
					<Route path='/pagetwo' component={PageTwo} />
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
