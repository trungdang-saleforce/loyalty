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
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      alignItems: 'stretch',
      justifyContent: 'center',
    },
    search: {
      paddingHorizontal: appStyleConstants.LARGE_SCREEN_MARGIN,
    },
    searchText:{
      fontSize: 20,
      fontWeight: 'bold'
    },
    item1: {
      flex: 1,
      width: '100%',
      flexDirection: 'row',
    },
    item2: {
      flex: 1,
      width: '100%',
      flexDirection: 'row',
      bottom: 100,
    },
    header: {
      fontWeight: 'bold',
      color: 'orange'
    },
    text1: {
      width: '80%',
      backgroundColor: '#F6F5F5',
      marginTop: 100,
      bottom: 100,
      left: 40

    },
    text2: {
      width: '80%',
      backgroundColor: '#F6F5F5',
      marginTop: 100,
      bottom: 200,
      left: 40
      

    },
    description: {
      fontSize: 12,
      marginTop: 5,
    },
    heart: {
      width: 30,
      height:30,
      top: '63%',
      left:40,
    },
    icon2: {
      width: 40,
      height:40,
      top: "3%",
    },
    icon3: {
        top: '20%',
        left: '20%',
        width: 70,
        height: 70
    },
    icon4: {
      width: 40,
      height:40,
      top: '3%',
      left: '25%'

    },
    image1: {
      width: 200,
      height: 300,
      top: 20,
      left: 50,
    },
    image2: {
      width: 200,
      height: 300,
      top: 20,
      left: 100,
    },
    touch: {
      left:70,
      height: 50,
      top: '60%'
    }
})