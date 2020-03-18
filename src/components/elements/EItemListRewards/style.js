import {StyleSheet} from 'react-native';
import { appStyleConstants } from '../../../commons/Constants';

export default StyleSheet.create({
  view: {
    flexDirection: 'row',
    paddingVertical: appStyleConstants.NORMAL_SCREEN_MARGIN,
    marginHorizontal: appStyleConstants.NORMAL_SCREEN_MARGIN,
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
  },
  viewImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    height: 86,
    width: 86,
    borderRadius: 43,
  },
  content: {
    flex: 1,
    justifyContent: 'space-evenly'
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
  }
})