/*
*
@author tri.tran on 2/15/19
*
*/

import {StyleSheet} from 'react-native'
import { appStyleConstants } from '../../../commons/Constants';

export default StyleSheet.create({
    view: {
      backgroundColor: '#FFFFFF',
      flex: 1,
    },
    balance: {
      paddingVertical: appStyleConstants.NORMAL_SCREEN_MARGIN,
      marginHorizontal: appStyleConstants.NORMAL_SCREEN_MARGIN,
      borderBottomWidth: 3,
      borderBottomColor: '#000000',
      alignItems: 'center',
    },
    balanceText: {
      color: '#000000',
      fontSize: 12,
      fontWeight: 'bold',
      textAlign: 'center',
      paddingVertical: 5,
    },
    balanceValue: {
      color: '#000000',
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      paddingVertical: 5,
    },
    historyView: {
      backgroundColor: '#FFFFFF',
      height: 30,
      width: '100%',
      alignItems: 'center',
      paddingVertical: 5,
      position: 'absolute',
      bottom: 0,
    },
    historyText: {
      color: '#2F80ED',
      fontSize: 12,
      fontWeight: 'bold',
    }
})