/*
*
@author tri.tran on 2/15/19
*
*/

import {StyleSheet, Platform} from 'react-native'
import {ifIphoneX} from 'react-native-iphone-x-helper';
import { deviceWidth, appStyleConstants } from '../../../commons/Constants';

const headerHeight = 90

export default StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'flex-end',
    position: 'absolute',
    width: deviceWidth - appStyleConstants.NORMAL_SCREEN_MARGIN*2,
    top: headerHeight + (Platform.OS === 'ios' ? ifIphoneX(25, 0) : 0),
    zIndex: 2,

  },
  productView: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: '100%',
    padding: appStyleConstants.NORMAL_SCREEN_MARGIN,
  },
  nameView: {
    color: '#000000',
    fontSize: 18,
    paddingBottom: 10,
  },
  describeView: {
    color: '#000000',
    fontSize: 12,
    width: '80%',
  },
  searchView: {
  },
  iconSearchView: {
    height: 20,
    width: 20,
    position: 'absolute',
    left: 0,
    top: 13,
  },
  textSearch: {
    marginLeft: 20,
  },
  listView: {
  }

})