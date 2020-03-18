import {StyleSheet, Platform} from 'react-native'
import { appStyleConstants } from '../../../commons/Constants';

export default StyleSheet.create({
    loading: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ced4dd',
        borderRadius: appStyleConstants.UI_BORDER_RADIUS,
        width: 50,
        height: 50,
        paddingLeft: Platform.OS === 'ios' ? 3 : 0,
        paddingTop: Platform.OS === 'ios' ? 3 : 0,
    },
})