/*
*
@author tri.tran on 2/15/19
*
*/

import {StyleSheet, Platform} from 'react-native'
import {ifIphoneX} from 'react-native-iphone-x-helper';
import { deviceHeight, appStyleConstants, deviceWidth } from '../../../commons/Constants';

const headerHeight = 90

export default StyleSheet.create({
    view: {
      flex: 1,
      alignItems: 'center',
      position: 'absolute',
      width: '100%',
      top: headerHeight + (Platform.OS === 'ios' ? ifIphoneX(25, 0) : 0),
    },
    backView: {
      flexDirection: 'row',
    },
    iconBack: {
      height: 20,
    },
    textBack: {
      color: '#757575',
      fontWeight: '500',
      marginLeft: -10,
      marginTop: 2,
    },
    avatar: {
      height: 90,
      width: 90,
      borderRadius: 45,
      borderColor: '#FFFFFF',
      borderWidth: 3,
    },
    inforView: {
      paddingVertical: appStyleConstants.NORMAL_SCREEN_MARGIN,
    },
    scrollView: {
      flex: 1,
      marginTop: 60,
      marginHorizontal: appStyleConstants.NORMAL_SCREEN_MARGIN,
    },
    viewProfile: {
      backgroundColor: '#FFFFFF',
      width: '100%',
      height: deviceHeight,
      position: 'absolute',
      top: 45,
      paddingTop: 30,
    },
    editView: {
      alignItems: 'center',
      width: deviceWidth - appStyleConstants.NORMAL_SCREEN_MARGIN*2,
    },
    editTitle: {
      color: '#000000',
      fontWeight: 'bold',
    },
    inputView: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 5,
    },
    editValue: {
      color: '#828282',
      width: 150,
    },
    editIconView: {
      height: 20,
    },
    interestTitle: {
      textAlign: 'center',
      paddingBottom: 10,
      color: '#000000',
      fontWeight: 'bold',
    },
    interestView: {
      flexDirection: 'row',
      width: deviceWidth - 40,
      justifyContent: 'space-between',
      flexWrap: 'wrap',
    },
    viewCheckBox: {
      marginVertical: 5,
    },
    submit: {

    },
    textSubmit: {
      fontSize: 14,
      fontWeight: 'bold'
    }
})