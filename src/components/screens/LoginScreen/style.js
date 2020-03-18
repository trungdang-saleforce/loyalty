/*
*
@author tri.tran on 2/15/19
*
*/

import {StyleSheet} from 'react-native'
import { appStyleConstants, deviceWidth } from '../../../commons/Constants';

const percentMarginTop = 56 / 375

export default StyleSheet.create({
    baseContainer: {
        backgroundColor: '#FFFFFF'
    },
    loginForm: {
        alignItems: 'center',
        alignSelf: 'center',
        width: deviceWidth - 72,
        justifyContent: 'center'
    },
    emailInput: {
        marginTop: deviceWidth * percentMarginTop,
        borderColor: '#828282',
        borderWidth: 1,
        height: deviceWidth * appStyleConstants.PERCENT_INPUT,
    },
    passwordInput: {
        marginTop: appStyleConstants.NORMAL_SCREEN_MARGIN,
        borderColor: '#828282',
        borderWidth: 1,
        height: deviceWidth * appStyleConstants.PERCENT_INPUT,
    },
    loginButton: {
        marginTop: appStyleConstants.NORMAL_SCREEN_MARGIN,
    },
    textLoginButton: {
        fontWeight: 'bold',
        fontSize: 14
    },
    description: {
        marginTop: appStyleConstants.NORMAL_SCREEN_MARGIN,
        marginHorizontal: 36,
    }
})