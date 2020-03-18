import {StyleSheet} from 'react-native';
import { deviceWidth, PERCENT } from '../../../../commons/Constants';

export default StyleSheet.create({
  view: {
    height: deviceWidth * PERCENT,
    width: '100%',
    backgroundColor: '#FFFFFF',
  },
  background: {
    width: '100%',
    height: deviceWidth * PERCENT,
  }
})