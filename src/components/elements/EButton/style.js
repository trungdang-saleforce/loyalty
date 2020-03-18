/*
*
@author tri.tran on 2/18/19
*
*/

import {StyleSheet} from 'react-native'
import { appStyleConstants } from '../../../commons/Constants';

export default StyleSheet.create({
    container: {
        height: appStyleConstants.UI_ITEM_HEIGHT,
        backgroundColor: 'rgb(0, 0, 0)',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        borderRadius: appStyleConstants.UI_BORDER_RADIUS
    },
    text: {
        color: 'white',
        fontSize: appStyleConstants.mediumFont,
    },
    validate: {
        borderWidth: 1,
        borderColor: '#292929'
    },
})