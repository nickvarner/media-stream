import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
	renderError ({ error, touched }) {
		if (touched && error) {
			return (
				<div className='ui error message'>
					<div className='header'>{error}</div>
				</div>
			);
		}
	}
	renderInput = ({ input, label, meta }) => {
		const className = `field ${
			meta.error && meta.touched ? 'error' :
			''}`;
		return (
			<div className={className}>
				<label>{label}</label>
				<input {...input} autoComplete='off' />
				{this.renderError(meta)}
			</div>
		);
	};
	onSubmit (formValues) {
		console.log(formValues);
	}
	render () {
		return (
			<form onSubmit={this.props.handleSubmit(this.onSubmit)} className='ui form error'>
				<Field name='title' component={this.renderInput} label='enter title' />
				<Field name='description' component={this.renderInput} label='enter description' />
				<button className='ui primary'>submit</button>
			</form>
		);
	}
}

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
	form     : 'streamCreate',
	validate
})(StreamCreate);
