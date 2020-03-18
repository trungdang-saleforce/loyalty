/*
*
@author tri.tran on 2/18/19
*
*/

import {StyleSheet} from 'react-native'
import { appStyleConstants } from '../../../commons/Constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(51, 51, 51, 0.5)',
    },
    dialog: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: appStyleConstants.LARGE_SCREEN_MARGIN,
        position: 'absolute',
    },
})