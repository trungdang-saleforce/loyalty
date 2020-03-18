import {StyleSheet} from 'react-native';
import { deviceWidth } from '../../../../commons/Constants';

export default StyleSheet.create({
  view: {
    flexDirection: 'row',
    height: 100,
    width: '100%',
    backgroundColor: '#FFFFFF',
    paddingTop: 50,
  },
  back: {
    marginTop: 5,
    height: 20,
  },
  searchText: (showBack) => {
    return {
      height: 30,
      width: showBack ? deviceWidth - 100 : deviceWidth - 50,
    }
  },
   
  searchIcon: {
    marginTop: 5,
    height: 20,
  }
})