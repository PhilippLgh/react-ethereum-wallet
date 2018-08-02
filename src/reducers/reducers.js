import { combineReducers } from 'redux';
import actions from '../actions/actions.js';

const initialState = {};

export default function(state = initialState, action) {
	switch(action.type) {
		case 'UPDATE_CURRENCY_UNIT': 
			return {
				...state,
				currency: action.payload
			}
		case 'UPDATE_CONNECTED_NETWORK': 
			return {
				...state,
				network: action.payload
			}
		default:
			return state;
	}
}