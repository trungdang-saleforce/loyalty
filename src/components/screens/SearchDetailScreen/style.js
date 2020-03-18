/*
*
@author tri.tran on 2/15/19
*
*/

import {StyleSheet} from 'react-native'
import { appStyleConstants, deviceWidth } from '../../../commons/Constants';

export default StyleSheet.create({
    view: {
      backgroundColor: '#FFFFFF',
    },
    container: {
      
    },
    mapView: {
      height: 400,
      width: 400,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
    info: {
      padding: appStyleConstants.LARGE_SCREEN_MARGIN,
    },
    address: {
      width: deviceWidth - appStyleConstants.LARGE_SCREEN_MARGIN*2,
      textAlign: 'justify',
    },
    utilities: {
      flexDirection: 'row',
    },
    plugin: {
      height: 30,
    },
    phone: {
      flexDirection: 'row',
      paddingVertical: 10,
    },
    phoneTitle: {

    },
    phoneValue: {
      color: '#AB5404',
      marginLeft: 10,
    },
    location: {
      flexDirection: 'row',
      paddingVertical: 10,
    },
    locationIcon: {
      height: 20,
    },
    locationDetect: {
      
    }
})