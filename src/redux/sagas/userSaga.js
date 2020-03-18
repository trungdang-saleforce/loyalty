/*
*
@author tri.tran on 2/18/19
*
*/
import { all, put, call, takeLatest } from 'redux-saga/effects';
import {NavigationActions} from 'react-navigation';
import {ACTION_TYPE} from "../actions/type";
import { isEmpty, transformInterestedFields, goBack, showMessage } from '../../commons/Utils';
import services from '../../services';
import _ from 'lodash';
import { getStore } from '../../../App';
import { actions } from '../actions';
import { appScreenName } from '../../commons/Constants';

function* doLogin(action) {
  try {
    const result = yield call(services.login.doLogin, action.username, action.pass)
    if(result.error < 0) {
      showMessage('Login', 'Login failed: wrong password');
      yield put({
        type: ACTION_TYPE.DO_LOGIN_FAILURE,
        e: 'Login error'
      })
      return;
    }
    getStore().dispatch(actions.getProfile())
    yield put({
      type: ACTION_TYPE.DO_LOGIN_SUCCESS,
      data: result.data
    })
    setTimeout(() => {
      getStore().dispatch(actions.doAppData(result.data))
      if(result.error === 0) {
        getStore().dispatch(NavigationActions.navigate({routeName: appScreenName.home}))
      } else if (result.error === 1) {
        getStore().dispatch(NavigationActions.navigate({routeName: appScreenName.profile, params: {newEmail: action.username}}))
      }
    }, 200)
  } catch (e) {
    yield put({
      type: ACTION_TYPE.DO_LOGIN_FAILURE,
      e
    })
    
  }
}

function* doLogout() {
  try {
    yield call(services.login.doLogout);
    yield put({
      type: ACTION_TYPE.DO_LOGOUT_SUCCESS,
    })
    getStore().dispatch(NavigationActions.navigate({routeName: appScreenName.login}))
  } catch (e) {
    yield put({
      type: ACTION_TYPE.DO_LOGOUT_FAILURE,
      e
    })
  }
}

function* doAutoLogin() {
  try {
    const token = yield call(services.login.autoLogin)
    if(isEmpty(token)) {
      getStore().dispatch(actions.doLogout());
      return;
    }
    yield put({
      type: ACTION_TYPE.DO_LOGIN_SUCCESS,
      data: token,
    })
    getStore().dispatch(actions.doAppData());
    getStore().dispatch(actions.getProfile());
    setTimeout(() => {
      getStore().dispatch(NavigationActions.navigate({routeName: appScreenName.home}))
    }, 200)
  } catch(e) {
    getStore().dispatch(actions.doLogout());
  }
}

function* getProfile() {
  try {
    const result = yield call(services.login.getProfile)
    if(result.error < 0) {
      getStore().dispatch(actions.doLogout());
      return;
    } 
    result.data.interestedFields = transformInterestedFields(result.data.interestedFields);
    yield put({
      type: ACTION_TYPE.GET_PROFILE_SUCCESS,
      data: result.data
    })
  } catch(e) {
    yield put({
      type: ACTION_TYPE.GET_PROFILE_FAILURE,
      e
    })
  }

}

function* postProfile(action) {
  try {
    const result = yield call(services.login.postProfile, action.body);
    if(result.error < 0) {
      return;
    }
    yield put({
      type: ACTION_TYPE.POST_PROFILE_SUCCESS
    })
    getStore().dispatch(actions.getProfile());
    goBack();
  } catch(e) {
    yield put({
      type: ACTION_TYPE.POST_PROFILE_FAILURE,
      e
    })
  }

}

export default function* root() {
  yield all([
    takeLatest(ACTION_TYPE.DO_LOGIN, doLogin),
    takeLatest(ACTION_TYPE.DO_LOGOUT, doLogout),
    takeLatest(ACTION_TYPE.DO_AUTO_LOGIN, doAutoLogin),
    takeLatest(ACTION_TYPE.GET_PROFILE, getProfile),
    takeLatest(ACTION_TYPE.POST_PROFILE, postProfile),
  ]);
}
