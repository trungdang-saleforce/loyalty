/*
*
@author tri.tran on 1/29/19
*
*/

//default state
import {ACTION_TYPE} from "../actions/type";

const initState = {
  isFetching: false,
  stores: [],
  locationStores: [],
}

export default stores = (state = initState, action = {}) => {
	switch (action.type) {
		//handle actions
		case ACTION_TYPE.GET_STORES:
			return {
				...state,
				isFetching: true
			}
		case ACTION_TYPE.GET_STORES_SUCCESS:
			return {
				...state,
				stores: action.data,
				isFetching: false
			}
		case ACTION_TYPE.GET_STORES_FAILURE:
			return {
				...state,
				isFetching: false,
				e: action.e
			}
		case ACTION_TYPE.CALL_GOOGLE_MAP_API:
			return {
				...state,
				isFetching: true
			}
		case ACTION_TYPE.CALL_GOOGLE_MAP_API_SUCCESS:
			return {
				...state,
				locationStores: action.data,
				isFetching: false
			}
		case ACTION_TYPE.CALL_GOOGLE_MAP_API_FAILURE:
			return {
				...state,
				isFetching: false,
				e: action.e
			}
		default:
			return state
	}
}
