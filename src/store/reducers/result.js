import * as actionTypes from '../actions/actionTypes';

const initialState = {
	results: []
};

const reducer = (state = initialState, action) => {
	// eslint-disable-next-line
	switch (action.type) {
		case actionTypes.STORE_RESULT:
			return {
				...state,
				results: state.results.concat({ id: new Date(), value: action.result })
			}
		case actionTypes.DELETE_RESULT:
			// const id = 2;
			// const newArray = [...state.results];
			// newArray.splice(id, 1)
			const updatedArray = state.results.filter(result => result.id !== action.resultElId);
			return {
				...state,
				results: updatedArray
			}
	}
	return state;
};

export default reducer;