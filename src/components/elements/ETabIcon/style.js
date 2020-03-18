import {StyleSheet} from "react-native";

/**
 * Created by thienmd on 3/26/19
 */

export default StyleSheet.create({
  container: {
    width: 36,
    height: 36,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 24,
    height: 24,
  },
  badgeContainer: {
    backgroundColor: 'red',
    width: 8,
    height: 8,
    borderRadius: 4,
    position: 'absolute',
    top:0,
    right: 0,
  }
})
