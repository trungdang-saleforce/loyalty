/*
*
@author tri.tran on 2/19/19
*
*/
import {StyleSheet, Platform} from 'react-native'

export default StyleSheet.create({
    view: {
        width: 90,
        height: 90,
    },
    avatar: {
        height: '100%',
        width: '100%',
        borderRadius: Platform.OS === 'ios' ? 45 : 135,
        borderColor: '#757575',
        borderWidth: 1,
    },
    edit: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        borderColor: '#BDBDBD',
        borderWidth: 1,
        padding: 1,
    },
    icon: {
        height: 20,
        width: 20,
    }
})