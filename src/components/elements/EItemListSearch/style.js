import {StyleSheet} from 'react-native';
import { appStyleConstants } from '../../../commons/Constants';

export default StyleSheet.create({
  view: {
    flex: 1,
    padding: appStyleConstants.LARGE_SCREEN_MARGIN,
  },
  imageIcon: {
    height: 160,
    width: '100%',
  },
  hasNew: {
    position: 'absolute',
    top: 30,
    left: appStyleConstants.LARGE_SCREEN_MARGIN,
  },
  features: {
    flexDirection: 'row',
    position: 'absolute',
    top: 150,
    left: appStyleConstants.SMALL_SCREEN_MARGIN,
  },
  like: {
    height: appStyleConstants.LARGE_SCREEN_MARGIN,
  },
  location: {
    height: appStyleConstants.LARGE_SCREEN_MARGIN,
  },
  content: {
    backgroundColor: '#F6F5F5',
    borderRadius: appStyleConstants.SMALL_SCREEN_MARGIN,
    padding: appStyleConstants.SMALL_SCREEN_MARGIN,
    marginTop: appStyleConstants.SMALL_SCREEN_MARGIN,
  },
  title: {
    fontWeight: 'bold',
    color: '#000000',
    paddingBottom: 5,
  },
  description: {
    textAlign: 'justify',
    color: '#000000',
  }
})