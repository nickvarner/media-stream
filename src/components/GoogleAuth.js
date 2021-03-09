import React from 'react';

class GoogleAuth extends React.Component {
	componentDidMount () {
		window.gapi.load('client:auth2', () => {
			window.gapi.client.init({
				clientId : '795078419535-6cl89kdi6gvcl96kq3841psf1tubcdfe.apps.googleusercontent.com',
				scope    : 'email'
			});
		});
	}
	render () {
		return <div className='GoogleAuth'>google auth</div>;
	}
}

export default GoogleAuth;
