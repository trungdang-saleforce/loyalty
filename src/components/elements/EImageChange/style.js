/*
*
@author tri.tran on 3/8/19
*
*/
import {StyleSheet} from 'react-native'
import { appStyleConstants } from '../../../commons/Constants';

const {UI_ITEM_HEIGHT, SMALL_SCREEN_MARGIN} = appStyleConstants

export default StyleSheet.create({
    image: {
        width: UI_ITEM_HEIGHT,
        height: UI_ITEM_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
    },
    uploadContainer: {
        backgroundColor: '#FFFFFF',
        borderColor: '#BDBDBD',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 24,
        borderRadius: 12,
        position: 'absolute',
        right: 5,
        bottom: 3,
    },
    camera: {
        width: 12,
        height: 12
    },
    label: {
        color: 'white',
        fontSize: 9,
        marginTop: SMALL_SCREEN_MARGIN
    }
})
