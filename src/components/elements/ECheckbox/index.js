/*
*
@author tri.tran on 2/18/19
*
*/

import React, {Component} from 'react'
import {Image, TouchableOpacity, ViewPropTypes, Text} from 'react-native'
import PropTypes from 'prop-types'
import styles from './style'
import EText from '../EText';
import { appStyleConstants } from '../../../commons/Constants';

export const ECheckboxType = {
    CheckBox: 1,
    // RadioButton: 1,
    // CircleCheckBox: 3
}

export default class ECheckbox extends Component {

    getCheckedIcon = () => {

        if (this.props.type === ECheckboxType.CheckBox) {
            return require('../../../../res/check-box-uncheck-black.png')
        }
        // else if (this.props.type === ECheckboxType.RadioButton){
        //     return require('../../../res/radio-box-green.png')
        // }else if (this.props.type  === ECheckboxType.CircleCheckBox){
        //     return require('../../../res/success-icon.png')
        // }else{
        //     return  require('../../../res/check-box-checked.png')
        // }
    }

    getUncheckIcon = () => {
        if (this.props.type === ECheckboxType.CheckBox) {
            return require('../../../../res/check-box-checked-black.png')
        }
        // else if (this.props.type  === SettingRowItem.RadioButton){
        //     return  require('../../../res/radio-box-grey.png')
        // }else if (this.props.type  === SettingRowItem.CircleCheckBox){
        //     return require('../../../res/un-participate-ico.png')
        // }else{
        //     return  require('../../../res/check-box-uncheck.png')
        // }
    }

    render() {
        let containerProps = {
                onPress: () => {
                    if (typeof this.props.onPress === 'function')
                        this.props.onPress(!this.props.isChecked)
                },
                style: [styles.container, this.props.style]
            },
            iconProps = {
                style: [styles.icon, this.props.isTextFirst && {marginLeft: appStyleConstants.SMALL_SCREEN_MARGIN}],
                source: this.props.isChecked ? this.getCheckedIcon() : this.getUncheckIcon()

            },
            textProps = {
                text: this.props.text,
                style: [styles.text, this.props.textStyle, !this.props.isTextFirst && {marginLeft: appStyleConstants.SMALL_SCREEN_MARGIN}]
            };
        if (this.props.isTextFirst)
            return <TouchableOpacity {...containerProps}>
                {
                    this.props.text !== ''
                    &&
                    <EText {...textProps}/>
                }
                <Image {...iconProps}/>
            </TouchableOpacity>;
        else
            return <TouchableOpacity {...containerProps}>
                <Image {...iconProps}/>
                {
                    this.props.text !== ''
                    &&
                    <EText {...textProps}/>
                }
            </TouchableOpacity>
    }
}

ECheckbox.propTypes = {
    isChecked: PropTypes.bool,
    onPress: PropTypes.func,
    text: PropTypes.string,
    style: ViewPropTypes.style,
    isTextFirst: PropTypes.bool,
    type: PropTypes.number,
    textStyle: Text.propTypes.style
}

ECheckbox.defaultProps = {
    isChecked: false,
    onPress: () => {
    },
    text: '',
    style: null,
    isTextFirst: false,
    type: ECheckboxType.CheckBox,
    textStyle: null
}
