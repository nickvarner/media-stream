import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import { useHistory } from 'react-router-dom';
import StreamForm from './StreamForm';

const StreamCreate = (props) => {
	const history = useHistory();
	const onSubmit = (formValues) => {
		props.createStream(formValues);
		history.push('/');
	};
	return (
		<div>
			<h3>create a stream</h3>
			<StreamForm onSubmit={onSubmit} />
		</div>
	);
};

export default connect(null, { createStream })(StreamCreate);

// one way to do it in this syntax, but people use the above method more often
// export default connect()(reduxForm({
// 	form     : 'streamCreate',
// 	validate
// })(StreamCreate))
