import React from 'react';
import Modal from '../../components/Modal';
import { connect } from 'react-redux';
import { fetchStream, deleteStream } from '../../actions';
import { useHistory } from 'react-router-dom';

const StreamDelete = (props) => {
	React.useEffect(() => {
		console.log(props);
		console.log('streamdelete useeffect');
		props.fetchStream(props.match.params.id);
	}, []);
	const history = useHistory();
	const onDismiss = () => {
		history.push('/');
	};
	const handleDelete = () => {
		props.deleteStream(props.match.params.id);
		history.push('/');
	};
	const renderActions = () => {
		return (
			<div>
				<button className='ui button' onClick={onDismiss}>
					cancel
				</button>
				<button className='ui button negative' onClick={handleDelete}>
					delete
				</button>
			</div>
		);
	};
	const renderContent = () => {
		if (!props.stream) {
			return 'are you sure you want to delete this stream?';
		}
		return `are you sure you want to delete ${props.stream.title}`;
	};
	return <Modal title='delete stream' content={renderContent()} actions={renderActions()} onDismiss={onDismiss} />;
};

const mapStateToProps = (state, ownProps) => {
	return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);
