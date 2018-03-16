import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
	counter: 0
};

const reducer = (state = initialState, action) => {
	// eslint-disable-next-line
	switch (action.type) {
		case actionTypes.INCREMENT:
			return updateObject(state, { counter: state.counter + 1 });
		
			// const newState = Object.assign({}, state);
			// newState.counter = state.counter + 1;
			// return newState;
		case actionTypes.DECREMENT:
			return updateObject(state, { counter: state.counter - 1 });
		
			// return an updated object
			// return {
			// 	// copy the old state
			// 	...state,
			// 	// and replace one of state property
			// 	counter: state.counter - 1
			// }
		case actionTypes.ADD:
			return updateObject(state, { counter: state.counter + action.val });
		
			// return an updated object
			// return {
			// 	...state,
			// 	counter: state.counter + action.val
			// }
		case actionTypes.SUBTRACT:
			// we pass the state as the old object
			// second is an obj with all new props
			return updateObject(state, { counter: state.counter - action.val});
			// return an updated object
			// return {
			// 	...state,
			// 	counter: state.counter - action.val
			// }
	}
	return state;
};

export default reducer;