import {StyleSheet} from 'react-native';
import { deviceWidth, appStyleConstants } from '../../../commons/Constants'; 

export default StyleSheet.create({
  baseContainer: {
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontWeight: 'normal',
    fontSize: 18,
    lineHeight: 21,
    marginLeft: 16,
    marginTop: 26,
  },
  aboutForm: {
    alignItems: 'center',
    alignSelf: 'center',
    width: deviceWidth - 72,
    justifyContent: 'center'
  },
  textInput: {
    marginTop: appStyleConstants.NORMAL_SCREEN_MARGIN,
    borderColor: '#828282',
    borderWidth: 1,
    height: deviceWidth * appStyleConstants.PERCENT_INPUT,
  },
  submit: {
    marginTop: appStyleConstants.NORMAL_SCREEN_MARGIN,
  },
  textSubmit: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  viewCheckBox: {
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    width: deviceWidth - 72,
    marginVertical: 8,
  }
});