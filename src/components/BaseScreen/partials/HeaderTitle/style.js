import {StyleSheet} from 'react-native';
import { deviceWidth } from '../../../../commons/Constants';

export default StyleSheet.create({
  view: {
    flexDirection: 'row',
    height: 100,
    width: '100%',
    backgroundColor: '#FFFFFF',
  },
  backView: {
    position: 'absolute',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  back: {
    height: 20,
  },
  viewTitle: {
    width: deviceWidth - 100,
    alignItems: 'center',
    marginHorizontal: 50,
    justifyContent: 'center',
  },
  text: {
    color: '#323259',
    fontSize: 18,
    textAlign: 'center',
  }
})