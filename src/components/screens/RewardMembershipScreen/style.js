/*
*
@author tri.tran on 2/15/19
*
*/

import {StyleSheet} from 'react-native'
import { appScreenName, appStyleConstants } from '../../../commons/Constants';

export default StyleSheet.create({
    content: {
      backgroundColor: '#FFFFFF',
      flex: 1,
      padding: appStyleConstants.NORMAL_SCREEN_MARGIN,
    },
    since: {
      color: '#000000',
      fontSize: 18,
      paddingVertical: 7,
      textAlign: 'justify',
    },
    viewQRCode: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-around',
      paddingVertical: 0,
    },
    qrcode: {
      height: 172,
      width: 183,
    }
})