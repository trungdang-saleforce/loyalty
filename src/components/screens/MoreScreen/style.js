/*
*
@author tri.tran on 2/15/19
*
*/

import {StyleSheet} from 'react-native'
import { appStyleConstants } from '../../../commons/Constants';

export default StyleSheet.create({
    view: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      padding: appStyleConstants.NORMAL_SCREEN_MARGIN,
    },
    headerTitle: {
      fontSize: 30,
      fontWeight: '600',
      paddingBottom: appStyleConstants.NORMAL_SCREEN_MARGIN,
    }
})