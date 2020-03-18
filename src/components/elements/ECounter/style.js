import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  view: {
    flex: 1,
  },
  count: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  counter: {
    flex: 1,
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
  counterText: {
    color: '#BDBDBD',
    fontSize: 14,
    fontWeight: 'bold',
  },
  countValue: {
    flex: 1,
    backgroundColor: '#BDBDBD',
    color: '#828282',
    fontSize: 14,
    padding: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  available: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 24,
  },
  availableValue: {
    color: '#2F80ED',
    fontSize: 14,
  },
  text: {
    color: '#BDBDBD',
    fontSize: 14,
    marginLeft: 5,
  },
  redeemView: {
    paddingVertical: 5,
  },
  redeemButton: {
    height: 30,
  }
})