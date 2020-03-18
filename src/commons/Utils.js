/*
*
@author tri.tran on 2/18/19
*
*/
import {
  BackHandler,
  Alert,
  Platform
} from 'react-native'
import {getStore} from "../../App";
import {appScreenName} from "./Constants";
import {NavigationActions} from 'react-navigation';
import _ from 'lodash';
import { actions } from '../redux/actions';

export const isEmpty = (obj) => {
  if(typeof obj === 'undefined' || obj === null || _.isEmpty(obj)) {
    return true
  }
  return false
}

export const isEmail = (email) => {
  if (email.length <= 0)
    return false
  let regex = "^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$"
  return email.match(regex)
}

export const currency = (num) => {
  if(_.isUndefined(num) || _.isNull(num) || !_.isNumber(num)) {
    return '0';
  }
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export const transformInterestedFields = (fields) => {
  if(isEmpty(fields)) {
    return [];
  }
  return _.map(fields, (item, k) => { return item.value});
}

function showDialogExitApp() {
  Alert.alert(
    '',
    'Do you want to exit app',
    [
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
      {text: 'OK', onPress: () => BackHandler.exitApp()},
    ],
    {cancelable: false},
  );
}

export const goBack = () => {
  const screenState = getStore().getState().apps.appScreens
  var screenLogin = screenState.routes[screenState.index - 1].routeName
  var screenRouteName = screenState.routes[screenState.index].routeName
  if(screenLogin === appScreenName.login && screenRouteName === appScreenName.profile) {
    getStore().dispatch(NavigationActions.navigate({routeName: appScreenName.home}));
  } else {
    switch (screenRouteName) {
      case appScreenName.home:
      case appScreenName.login:
        if (Platform.OS === 'android')
          showDialogExitApp()
        break
      default:
        getStore().dispatch(NavigationActions.back({key: screenState.routes[screenState.routes.length - 1].key}))
      break
    }
  }
  goBackHomeTab();
  goBackSearchScreen();
}

export const goBackSearchScreen = () => {
  const searchState = getStore().getState().apps.searchScreens
  getStore().dispatch(NavigationActions.back({key: searchState.routes[searchState.routes.length - 1].key}))
}

export const goBackHomeTab = () => {
  const homeState = getStore().getState().apps.homeTabs
  getStore().dispatch(NavigationActions.back({key: homeState.routes[homeState.routes.length - 1].key}))
}

export const goBackToHome = () => {
  var screenState = getStore().getState().apps.appScreens
  if (screenState.routes.length > 2) {
    for (let i = 0; i < screenState.routes.length; i++) {
      let route = screenState.routes[i]
      if (route.routeName === appScreenName.home && (i + 1) < screenState.routes.length) {
        let fromRoute = screenState.routes [i + 1]
        getStore().dispatch(NavigationActions.back({key: fromRoute.key}))
        break;
      }
    }

  }
}

export const showMessage = (title, message) => {
  getStore().dispatch(actions.openMessage(title, message));
}

export const closeMessage = () => {
  getStore().dispatch(actions.closeMessage());
}

