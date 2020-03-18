/*
*
@author tri.tran on 1/29/19
*
*/

//default state
import {ACTION_TYPE} from "../actions/type";

const initState = {
  title: '',
  message: '',
  hasShow: false,
}

export default modals = (state = initState, action = {}) => {
	switch (action.type) {
		//handle actions
		case ACTION_TYPE.OPEN_MESSAGE:
			return {
				...state,
        title: action.title,
        message: action.message,
        hasShow: true,
			}
		case ACTION_TYPE.CLOSE_MESSAGE:
			return {
				...state,
				hasShow: false
			}
		default:
			return state
	}
}
