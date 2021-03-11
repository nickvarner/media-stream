import streams from '../apis/streams';
import { SIGN_IN, SIGN_OUT } from './types';

export const signIn = (userId) => {
	return {
		type    : SIGN_IN,
		payload : userId
	};
};

export const signOut = () => {
	return {
		type : SIGN_OUT
	};
};

// export const createStream = (formValues) => {
// 	//when creating an asynchronous action create you must use redux thunk and return an arrow function
// 	return async (dispatch) => {
// 		streams.post('/streams', formValues);
// 	};
// };
//shorter syntax
export const createStream = (formValues) => async (dispatch) => {
	streams.post('/streams', formValues);
};
