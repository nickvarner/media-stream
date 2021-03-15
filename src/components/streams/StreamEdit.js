import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import { useHistory } from 'react-router-dom';
import StreamForm from './StreamForm';

const StreamEdit = (props) => {
	const history = useHistory();
	const streamId = props.match.params.id;
	React.useEffect(
		() => {
			props.fetchStream(streamId);
			console.log('streamedit useeffect used');
		},
		[ props.stream.title ]
	);
	const onSubmit = (formValues) => {
		props.editStream(streamId, formValues);
		history.push('/');
	};
	return (
		<div className=''>
			<h3>edit a stream</h3>
			<StreamForm
				onSubmit={onSubmit}
				// initialValues={{ title: props.stream.title, description: props.stream.description }}
				initialValues={props.stream}
			/>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => {
	return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);
