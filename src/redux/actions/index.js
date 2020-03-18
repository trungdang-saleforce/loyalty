/*
*
@author tri.tran on 1/29/19
*
*/

import {ACTION_TYPE} from "./type";

export const actions = {
  //put all actions
  onInternetConnectionChange(status) {
    return {
      type: ACTION_TYPE.ON_INTERNET_CONNECTION_CHANGE,
      status
    }
  },
  doAppData() {
    return {
      type: ACTION_TYPE.DO_APP_DATA
    }
  },
  doLogin(username, pass) {
    return {
      type: ACTION_TYPE.DO_LOGIN,
      username, pass,
    }
  },
  doLogout() {
    return {
      type: ACTION_TYPE.DO_LOGOUT
    }
  },
  getAutoLogin() {
    return {
      type: ACTION_TYPE.DO_AUTO_LOGIN
    }
  },
  getProfile() {
    return {
      type: ACTION_TYPE.GET_PROFILE
    }
  },
  postProfile(body) {
    return {
      type: ACTION_TYPE.POST_PROFILE,
      body
    }
  },
  getProductCategories() {
    return {
      type: ACTION_TYPE.GET_PRODUCT_CATEGORIES
    }
  },
  getProduct(name) {
    return {
      type: ACTION_TYPE.GET_PRODUCT,
      name
    }
  },
  getSpecialOffer() {
    return {
      type: ACTION_TYPE.GET_SPECIAL_OFFER
    }
  },
  doLikeProduct(productId) {
    return {
      type: ACTION_TYPE.DO_LIKE_PRODUCT,
      productId,
    }
  },
  doSearch(searchKey) {
    return {
      type: ACTION_TYPE.DO_SEARCH,
      searchKey
    }
  },
  doGetStores(productId, storeName) {
    return {
      type: ACTION_TYPE.GET_STORES,
      productId, storeName
    }
  },
  doCallGoogleMapAPI(addressList) {
    return {
      type: ACTION_TYPE.CALL_GOOGLE_MAP_API,
      addressList,
    }
  },
  doGetVouchers() {
    return {
      type: ACTION_TYPE.GET_VOUCHERS,
    }
  },
  doGetMyRewards() {
    return {
      type: ACTION_TYPE.GET_MY_REWARDS,
    }
  },
  doChangeAvailableVoucher(voucherId, availables) {
    return {
      type: ACTION_TYPE.CHANGE_AVAILABLE_VOUCHERS,
      voucherId, availables
    }
  },
  doGetHistoryVoucher() {
    return {
      type: ACTION_TYPE.GET_HISTORY_VOUCHERS
    }
  },
  showNoticedDialog(props) {
    return {
      type: ACTION_TYPE.SHOW_NOTICED_DIALOG,
      props
    }
  },
  hideNoticedDialog() {
    return {
      type: ACTION_TYPE.HIDE_NOTICED_DIALOG,
    }
  },
  openMessage(title, message) {
    return {
      type: ACTION_TYPE.OPEN_MESSAGE,
      title, message,
    }
  },
  closeMessage() {
    return {
      type: ACTION_TYPE.CLOSE_MESSAGE
    }
  }
}
