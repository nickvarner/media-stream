import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

const StreamEdit = (props) => {
	React.useEffect(
		() => {
			props.fetchStream(props.match.params.id);
		},
		[ props ]
	);
	return <div className=''>{props.stream.title}</div>;
};

const mapStateToProps = (state, ownProps) => {
	return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamEdit);
