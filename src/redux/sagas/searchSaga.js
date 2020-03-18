/*
*
@author tri.tran on 2/18/19
*
*/
import { all, put, call, takeLatest } from 'redux-saga/effects';
import {ACTION_TYPE} from "../actions/type";
import services from '../../services';
import _ from 'lodash';

function* doSearch(action) {
  try {
    
    yield put({
      type: ACTION_TYPE.DO_SEARCH_SUCCESS,
      data: action.searchKey,
    })
  } catch(e) {
    yield put({
      type: ACTION_TYPE.DO_SEARCH_FAILURE,
      e
    })
  }

}

export default function* root() {
  yield all([
    takeLatest(ACTION_TYPE.DO_SEARCH, doSearch),
  ]);
}
