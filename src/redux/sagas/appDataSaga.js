/*
*
@author tri.tran on 2/18/19
*
*/
import { all, put, call, takeLatest } from 'redux-saga/effects';
import _ from 'lodash';
import {ACTION_TYPE} from "../actions/type";
import services from '../../services';
import { isEmpty } from '../../commons/Utils';

const dataJSON = {
  "interestedFields": [
    {"value": 1, "name": "Special Offers"},
    {"value": 2, "name": "Food"},
    {"value": 3, "name": "Drinks"},
    {"value": 4, "name": "Phone Cards"}
  ],
  "logo": "http://triqtran.github.io/images/loyalty/others/logo-loyalty.png",
  "bannerHeaderImage": "https://namninh85.github.io/ducati_website/bg-header-coffee.jpeg.jpeg",
  "privacyLink": "https://www.circlek.com.vn/vi/chinh-sach-bao-mat/",
  "termConditionsLink": "https://www.circlek.com.vn/vi/dieu-khoan-su-dung/"
}

function* getAppData() {
  try {
  //  const result = yield call(services.appData.getData)
  //  if(isEmpty(result)) {
  //    console.log('Resutl calling:', result)
  //    return;
  //  }
  //  if(result.error < 0) {
  //    yield put({ type: ACTION_TYPE.DO_APP_DATA_FAILURE, e: result.message })
  //  }
  //  yield put({type: ACTION_TYPE.DO_APP_DATA_SUCCESS, data: result.data})
  yield put({type: ACTION_TYPE.DO_APP_DATA_SUCCESS, data: dataJSON})
   
  } catch (e) {
    yield put({
      type: ACTION_TYPE.DO_APP_DATA_FAILURE,
      e
    })
  }
}

export default function* root() {
  yield all([
    takeLatest(ACTION_TYPE.DO_APP_DATA, getAppData)
  ]);
}
