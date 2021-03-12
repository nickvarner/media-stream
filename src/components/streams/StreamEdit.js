import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

const StreamEdit = (props) => {
	React.useEffect(
		() => {
			props.fetchStream(props.match.params.id);
			console.log('useeffect used');
		},
		[ props.stream.title ]
	);
	const onSubmit = (formValues) => {
		console.log(formValues);
	};
	return (
		<div className=''>
			<h3>edit a stream</h3>
			<StreamForm
				onSubmit={onSubmit}
				initialValues={{ title: props.stream.title, description: props.stream.description }}
			/>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => {
	return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);
