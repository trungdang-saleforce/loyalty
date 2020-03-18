/*
*
@author tri.tran on 1/29/19
*
*/

//default state
import {ACTION_TYPE} from "../actions/type";

const initState = {
  isFetching: false,
  offers: [],
}

export default specialOffers = (state = initState, action = {}) => {
	switch (action.type) {
		//handle actions
		case ACTION_TYPE.GET_SPECIAL_OFFER:
			return {
				...state,
				isFetching: true
			}
		case ACTION_TYPE.GET_SPECIAL_OFFER_SUCCESS:
			return {
				...state,
				offers: action.data,
				isFetching: false
			}
		case ACTION_TYPE.GET_SPECIAL_OFFER_FAILURE:
			return {
				...state,
				isFetching: false,
				e: action.e
			}
		default:
			return state
	}
}
