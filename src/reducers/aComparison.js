//sample code
//array based approach for a reducer compared to an object

//first an array
const streamReducerArr = (state = [], action) => {
	switch (action.type) {
		case EDIT_STEAM:
			return state.map((stream) => {
				if (stream.id === action.payload.id) {
					return action.payload;
				} else {
					return stream;
				}
			});
		default:
			return state;
	}
};

//now the same approach using an object
const streamReducerObj = (state = [], action) => {
	switch (action.type) {
		case EDIT_STREAM:
			const newState = { ...state };
			newState[action.payload.id] = action.payload;
			return newState;
		default:
			return state;
	}
};

//lets use the same approach, but with some es2015 syntax

const streamReducerObj2 = (state = [], action) => {
	switch (action.type) {
		case EDIT_STREAM:
			return { ...state, [action.payload.id]: action.payload };
		default:
			return state;
	}
};
