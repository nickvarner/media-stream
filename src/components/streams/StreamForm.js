import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { useHistory } from 'react-router-dom';

const StreamForm = (props) => {
	const history = useHistory();
	const renderError = ({ error, touched }) => {
		if (touched && error) {
			return (
				<div className='ui error message'>
					<div className='header'>{error}</div>
				</div>
			);
		}
	};
	const renderInput = ({ input, label, meta }) => {
		const className = `field ${
			meta.error && meta.touched ? 'error' :
			''}`;
		return (
			<div className={className}>
				<label>{label}</label>
				<input {...input} autoComplete='off' />
				{renderError(meta)}
			</div>
		);
	};
	const onSubmit = (formValues) => {
		props.onSubmit(formValues);
		history.push('/');
	};
	return (
		<form onSubmit={props.handleSubmit(onSubmit)} className='ui form error'>
			<Field name='title' component={renderInput} label='enter title' />
			<Field name='description' component={renderInput} label='enter description' />
			<button className='ui primary'>submit</button>
		</form>
	);
};

const validate = (formValues) => {
	const errors = {};
	if (!formValues.title) {
		//only ran if the user did not enter a title
		errors.title = 'you must enter a title';
	}
	if (!formValues.description) {
		errors.description = 'you must enter a description';
	}
	return errors;
};

export default reduxForm({
	form     : 'streamForm',
	validate
})(StreamForm);
