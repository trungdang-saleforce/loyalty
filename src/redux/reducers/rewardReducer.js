/*
*
@author tri.tran on 1/29/19
*
*/

//default state
import {ACTION_TYPE} from "../actions/type";

const initState = {
  isFetching: false,
	vouchers: [],
	myrewards: [],
  histories: [],
}

export default rewards = (state = initState, action = {}) => {
	switch (action.type) {
		//handle actions
		case ACTION_TYPE.GET_VOUCHERS:
			return {
				...state,
				isFetching: true
			}
		case ACTION_TYPE.GET_VOUCHERS_SUCCESS:
			return {
				...state,
				vouchers: action.data,
				isFetching: false
			}
		case ACTION_TYPE.GET_VOUCHERS_FAILURE:
			return {
				...state,
				isFetching: false,
				e: action.e
			}
			case ACTION_TYPE.GET_MY_REWARDS:
				return {
					...state,
					isFetching: true
				}
			case ACTION_TYPE.GET_MY_REWARDS_SUCCESS:
				return {
					...state,
					myrewards: action.data,
					isFetching: false
				}
			case ACTION_TYPE.GET_MY_REWARDS_FAILURE:
				return {
					...state,
					isFetching: false,
					e: action.e
				}
    case ACTION_TYPE.CHANGE_AVAILABLE_VOUCHERS:
      return {
        ...state,
        isFetching: true
      }
    case ACTION_TYPE.CHANGE_AVAILABLE_VOUCHERS_SUCCESS:
      return {
        ...state,
        isFetching: true
      }
    case ACTION_TYPE.CHANGE_AVAILABLE_VOUCHERS_FAILURE:
      return {
        ...state,
        isFetching: false,
        e: action.e,
      }
		case ACTION_TYPE.GET_HISTORY_VOUCHERS:
			return {
				...state,
				isFetching: true
			}
		case ACTION_TYPE.GET_HISTORY_VOUCHERS_SUCCESS:
			return {
				...state,
				histories: action.data,
				isFetching: false
			}
		case ACTION_TYPE.GET_HISTORY_VOUCHERS_FAILURE:
			return {
				...state,
				isFetching: false,
				e: action.e
			}
		default:
			return state
	}
}
