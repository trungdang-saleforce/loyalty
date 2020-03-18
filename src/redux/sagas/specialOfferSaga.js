/*
*
@author tri.tran on 2/18/19
*
*/
import { all, put, call, takeLatest } from 'redux-saga/effects';
import {ACTION_TYPE} from "../actions/type";
import services from '../../services';
import _ from 'lodash';

function* getSpecialOffers() {
  try {
    const result = yield call(services.specialOffer.getSpecialOfferList)
    if(result.error  < 0) {
      yield put({
        type: ACTION_TYPE.GET_SPECIAL_OFFER_FAILURE,
        e: result.message
      })
    }
    yield put({
      type: ACTION_TYPE.GET_SPECIAL_OFFER_SUCCESS,
      data: result.data,
    })
  } catch(e) {
    yield put({
      type: ACTION_TYPE.GET_SPECIAL_OFFER_FAILURE,
      e
    })
  }

}

export default function* root() {
  yield all([
    takeLatest(ACTION_TYPE.GET_SPECIAL_OFFER, getSpecialOffers),
  ]);
}
