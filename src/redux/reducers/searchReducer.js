/*
*
@author tri.tran on 1/29/19
*
*/

//default state
import {ACTION_TYPE} from "../actions/type";

const initState = {
  isFetching: false,
  searchKey: '',
}

export default search = (state = initState, action = {}) => {
	switch (action.type) {
		//handle actions
		case ACTION_TYPE.DO_SEARCH:
			return {
				...state,
				isFetching: true
			}
		case ACTION_TYPE.DO_SEARCH_SUCCESS:
			return {
				...state,
				searchKey: action.data,
				isFetching: false
			}
		case ACTION_TYPE.DO_SEARCH_FAILURE:
			return {
				...state,
				isFetching: false,
				e: action.e
			}
		default:
			return state
	}
}
