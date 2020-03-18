/*
*
@author tri.tran on 2/18/19
*
*/
import { all, put, call, takeLatest, take } from 'redux-saga/effects';
import {ACTION_TYPE} from "../actions/type";
import services from '../../services';
import _ from 'lodash';

function* getListStores(action) {
  try {
    const {productId, storeName} = action
    const result = yield call(services.store.getListStores, productId, storeName);
    if(result.error  < 0) {
      yield put({
        type: ACTION_TYPE.GET_STORES_FAILURE,
        e: result.message
      })
    }
    yield put({
      type: ACTION_TYPE.GET_STORES_SUCCESS,
      data: result.data,
    })
  } catch(e) {
    yield put({
      type: ACTION_TYPE.GET_STORES_FAILURE,
      e
    })
  }
}

function* getListLocation(action) {
  try {
    const {address} = action
    const result = yield call(services.store.getListLocation, address);
    if(result.error  < 0) {
      yield put({
        type: ACTION_TYPE.CALL_GOOGLE_MAP_API_FAILURE,
        e: result.message
      })
    }
    yield put({
      type: ACTION_TYPE.CALL_GOOGLE_MAP_API_SUCCESS,
      data: result.data,
    })
  } catch(e) {
    yield put({
      type: ACTION_TYPE.CALL_GOOGLE_MAP_API_FAILURE,
      e
    })
  }
}

export default function* root() {
  yield all([
    takeLatest(ACTION_TYPE.GET_STORES, getListStores),
    takeLatest(ACTION_TYPE.CALL_GOOGLE_MAP_API, getListLocation)
  ]);
}
