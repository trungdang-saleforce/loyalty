import {StyleSheet} from 'react-native';
import { appStyleConstants, deviceWidth } from '../../../commons/Constants';

const WIDTH = (deviceWidth - appStyleConstants.NORMAL_SCREEN_MARGIN*2 - appStyleConstants.SMALL_SCREEN_MARGIN) / 2;

export default StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: appStyleConstants.NORMAL_SCREEN_MARGIN,
    marginHorizontal: appStyleConstants.NORMAL_SCREEN_MARGIN,
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
  },
  title: {
    flex: 1,
    width: WIDTH,
    justifyContent: 'space-evenly',
    // alignItems: 'center',
  },
  price: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#828282',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#828282',
  },
  point: {
    fontSize: 12,
    color: '#828282',
  },
  content: {
    width: WIDTH,
    alignItems: 'center'
  },
  description: {
    textAlign: 'justify',
    flexWrap: 'wrap',
  }
})