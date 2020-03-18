/*
*
@author tri.tran on 2/18/19
*
*/
import { all, put, call, takeLatest } from 'redux-saga/effects';
import {ACTION_TYPE} from "../actions/type";
import services from '../../services';
import _ from 'lodash';

const DATA = [
  {
    "productId": "1npihucw87eg8y8bgy",
    "title": "Nestea Lipton",
    "description": "Nestea is a brand of iced tea and cold beverage solutions owned by Nestlé,[1] manufactured by The Coca-Cola Company and distributed by Nestlé's beverage department in the United States and by Beverage Partners Worldwide (BPW)",
    "image": "http://triqtran.github.io/images/loyalty/products/nestea-1.png",
    "webLink": "https://www.circlek.com.vn/vi/san-pham-dich-vu/san-pham/",
    "hasNew": true,
    "categoryId": "1npihucw8fh58y8bgy"
  },
  {
    "productId": "1npihucw87eg2moii3",
    "title": "Nestea Lipton",
    "description": "Nestea is a brand of iced tea and cold beverage solutions owned by Nestlé,[1] manufactured by The Coca-Cola Company and distributed by Nestlé's beverage department in the United States and by Beverage Partners Worldwide (BPW)",
    "image": "http://triqtran.github.io/images/loyalty/products/nestea-2.png",
    "webLink": "https://www.circlek.com.vn/vi/san-pham-dich-vu/san-pham/",
    "hasNew": false,
    "categoryId": "1npihucw8fh58y8bgy"
  }
]

function* getProductCategories() {
  try {
    const result = yield call(services.product.getCategories)
    if(result.error  < 0) {
      yield put({
        type: ACTION_TYPE.GET_PRODUCT_CATEGORIES_FAILURE,
        e: result.message
      })
    }
    yield put({
      type: ACTION_TYPE.GET_PRODUCT_CATEGORIES_SUCCESS,
      data: result.data,
    })
  } catch(e) {
    yield put({
      type: ACTION_TYPE.GET_PRODUCT_CATEGORIES_FAILURE,
      e
    })
  }

}

function* getProducts(action) {
  try {
    const result = yield call(services.product.getProducts, action.name)
    // const result = {error: 0, data: DATA}
    if(result.error  < 0) {
      yield put({
        type: ACTION_TYPE.GET_PRODUCT_FAILURE,
        e: result.message
      })
    }
    yield put({
      type: ACTION_TYPE.GET_PRODUCT_SUCCESS,
      data: result.data,
    })
  } catch(e) {
    yield put({
      type: ACTION_TYPE.GET_PRODUCT_FAILURE,
      e
    })
  }

}

function* doLikeProduct(action) {
  try {
    console.log("Pass product ID:", action.productId);
    
    yield put({
      type: ACTION_TYPE.DO_LIKE_PRODUCT_SUCCESS
    })
  } catch(e) {
    yield put({
      type: ACTION_TYPE.DO_LIKE_PRODUCT_FAILURE,
      e
    })
  }
}

export default function* root() {
  yield all([
    takeLatest(ACTION_TYPE.GET_PRODUCT_CATEGORIES, getProductCategories),
    takeLatest(ACTION_TYPE.GET_PRODUCT, getProducts),
    takeLatest(ACTION_TYPE.DO_LIKE_PRODUCT, doLikeProduct),
  ]);
}
