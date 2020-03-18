/*
*
@author tri.tran on 1/29/19
*
*/

//default state
import {ACTION_TYPE} from "../actions/type";

const initState = {
	isResetSuccess: false,
	isFetching: false,
	token: null,
	user: {}
}

export default users = (state = initState, action = {}) => {
	switch (action.type) {
		//handle actions
		case ACTION_TYPE.DO_LOGIN:
			return {
				...state,
				isFetching: true
			}
		case ACTION_TYPE.DO_LOGIN_SUCCESS:
			return {
				...state,
				token: action.data,
				isFetching: false
			}
		case ACTION_TYPE.DO_LOGIN_FAILURE:
			return {
				...state,
				isFetching: false,
				e: action.e
			}
		case ACTION_TYPE.DO_LOGOUT: 
			return {
				...state,
				isFetching: true
			}
		case ACTION_TYPE.DO_LOGOUT_SUCCESS:
			return {
				...state,
				isFetching: false,
				token: null
			}
		case ACTION_TYPE.DO_LOGOUT_FAILURE: 
		return {
			...state,
			isFetching: false,
			e: action.e
		}
		case ACTION_TYPE.DO_AUTO_LOGIN:
			return {
				...state,
				isFetching: true,
			}
		case ACTION_TYPE.GET_PROFILE:
			return {
				...state,
				isFetching: false,
			}
		case ACTION_TYPE.GET_PROFILE_SUCCESS:
			return {
				...state,
				isFetching: false,
				user: action.data
			}
		case ACTION_TYPE.GET_PROFILE_FAILURE:
			return {
				...state,
				isFetching: false,
				e: action.e
			}
			case ACTION_TYPE.POST_PROFILE:
				return {
					...state,
					isFetching: true,
				}
			case ACTION_TYPE.POST_PROFILE_SUCCESS:
				return {
					...state,
					isFetching: false
				}
			case ACTION_TYPE.POST_PROFILE_FAILURE:
				return {
					...state,
					isFetching: false,
					e: action.e
				}
		default:
			return state
	}
}
