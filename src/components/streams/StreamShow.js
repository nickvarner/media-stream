import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

const StreamShow = (props) => {
	React.useEffect(() => {
		console.log('streamshow useeffect');
		props.fetchStream(props.match.params.id);
	}, []);
	if (!props.stream) {
		return <div className='div'>loading...</div>;
	}

	return (
		<div className=''>
			<h1>{props.stream.title}</h1>
			<h5>{props.stream.description}</h5>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => {
	return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
