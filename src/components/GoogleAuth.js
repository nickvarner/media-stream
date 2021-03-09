import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
	componentDidMount () {
		window.gapi.load('auth2', () => {
			window.gapi.auth2
				.init({
					clientId : '795078419535-6cl89kdi6gvcl96kq3841psf1tubcdfe.apps.googleusercontent.com',
					scope    : 'email'
				})
				.then(() => {
					this.auth = window.gapi.auth2.getAuthInstance();
					this.onAuthChange(this.auth.isSignedIn.get());
					this.auth.isSignedIn.listen(this.onAuthChange);
				});
		});
	}
	renderAuthButton () {
		if (this.props.isSignedIn === null) {
			return null;
		} else if (this.props.isSignedIn) {
			return (
				<button className='ui red google button' onClick={this.onSignOutClick}>
					<i className='google icon' /> sign out
				</button>
			);
		} else {
			return (
				<button className='ui red google button' onClick={this.onSignInClick}>
					<i className='google icon' /> google sign in
				</button>
			);
		}
	}
	onSignInClick = () => {
		this.auth.signIn();
	};
	onSignOutClick = () => {
		this.auth.signOut();
	};
	onAuthChange = (isSignedIn) => {
		if (isSignedIn) {
			this.props.signIn(this.auth.currentUser.get().getId());
		} else {
			this.props.signOut();
		}
	};
	render () {
		return <div className='GoogleAuth'>{this.renderAuthButton()}</div>;
	}
}

const mapStateToProps = (state) => {
	return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
