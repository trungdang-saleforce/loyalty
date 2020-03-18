/*
*
@author tri.tran on 1/29/19
*
*/

import {AppNavigator} from "../../RootApp/component";
import {appScreenName, homeTabName, searchScreenName} from "../../commons/Constants";
import {combineReducers} from 'redux'
import {ACTION_TYPE} from "../actions/type";
import { HomeTabNavigation } from "../../components/screens/HomeScreen/component";
import { SearchScreenNavigator } from "../../components/screens/SearchScreen/component";

//default state
const initState = {
    internetConnection: true,
    isFetching: false,
    appData: {}
}

const initialAppScreenState = AppNavigator.router.getStateForAction(
    AppNavigator.router.getActionForPathAndParams(appScreenName.splash));
const initialHomeTabState = HomeTabNavigation.router.getStateForAction(
    HomeTabNavigation.router.getActionForPathAndParams(homeTabName.product));
const initialSearchState = SearchScreenNavigator.router.getStateForAction(
        SearchScreenNavigator.router.getActionForPathAndParams(searchScreenName.searchMain));

const appCommons = (state = initState, action = {}) => {
    switch (action.type) {
        //handle actions
        case ACTION_TYPE.ON_INTERNET_CONNECTION_CHANGE:
            return {
                ...state,
                internetConnection: action.status
            }
        case ACTION_TYPE.DO_APP_DATA:
            return {
                ...state,
            }
        case ACTION_TYPE.DO_APP_DATA_SUCCESS:
            return {
                ...state,
                appData: action.data
            }
        case ACTION_TYPE.DO_APP_DATA_FAILURE:
            return {
                ...state,
                e: action.e
            }
        default:
            return state
    }
}

const appScreens = (state = initialAppScreenState, action) => {
    const nextState = AppNavigator.router.getStateForAction(action, state);
    return nextState || state;
};

const homeTabs = (state = initialHomeTabState, action) => {
    const nextState = HomeTabNavigation.router.getStateForAction(action, state);
    return nextState || state;
};

const searchScreens = (state = initialSearchState, action) => {
    const nextState = SearchScreenNavigator.router.getStateForAction(action, state);
    return nextState || state;
};

export default combineReducers({
    appCommons,
    appScreens,
    homeTabs,
    searchScreens,
})