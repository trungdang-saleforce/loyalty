import {StyleSheet} from 'react-native';
import { deviceWidth, deviceHeight } from '../../../commons/Constants';

const HORIZONTAL = (deviceWidth - 200) / 2;
const VERTICAL = (deviceHeight - 100) / 2;

export default StyleSheet.create ({
  view: {
    position: 'absolute',
    width: 200,
    height: 100,
    backgroundColor: '#FACF14',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: VERTICAL,
    left: HORIZONTAL,
    right: HORIZONTAL,
    borderRadius: 10,
    shadowColor: '#828282',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0
  },
  title: {
    paddingVertical: 10,
    color: '#EF3026',
    fontSize: 18,
    fontWeight: 'bold',
  },
  message: {
    textAlign: 'center',
    color: '#EF3026',
  }
})
