/*
*
@author tri.tran on 1/29/19
*
*/
import {combineReducers} from 'redux'
import {ACTION_TYPE} from '../actions/type'
import apps from './appReducer'
import users from './userReducer'
import products from './productReducer';
import specialOffers from './specialOfferReducer';
import search from './searchReducer';
import rewards from './rewardReducer';
import stores from './storeReducer';
import modals from './modalReducer';

//combine all reducer
const reducers = combineReducers({
    apps,
    users,
    products,
    specialOffers,
    search,
    rewards,
    stores,
    modals,
})

export default rootReducer = (state, action) => {
  if (action.type === ACTION_TYPE.DO_LOGOUT_SUCCESS) {
    state = undefined
  }

  return reducers(state, action)
}
