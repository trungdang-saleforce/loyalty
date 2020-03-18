/*
*
@author tri.tran on 2/15/19
*
*/

import React, {Component} from 'react'
import {Keyboard, Text, TouchableOpacity, TouchableWithoutFeedback, View, ViewPropTypes} from 'react-native'
import PropTypes from 'prop-types'
import styles from './style'
import EText from '../EText';
import { isEmpty } from '../../../commons/Utils';

export const TextButtonTypes = {
    black: 1,
    white: 2,
    red: 3,
    transparent: 4
}

export default class EButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            validate: false
        }
    }


    showValidate = () => {
        this.setState({
            validate: true
        })
    }

    hideValidate = () => {
        this.setState({
            validate: false
        })
    }

    getTextStyleFromType = () => {
        const {textColor} = this.props
        if(!isEmpty(textColor)) {
            return textColor
        }
        switch (this.props.type) {
            case TextButtonTypes.black:
                return 'white'
            case TextButtonTypes.white:
                return '#333333'
            case TextButtonTypes.red:
                return '#FFFFFF'
            case TextButtonTypes.transparent:
            default:
                return 'white'
        }
    }

    getStyleFromType = () => {
        switch (this.props.type) {
            case TextButtonTypes.black:
                return {
                    backgroundColor: '#2E2E2E'
                }
            case TextButtonTypes.white:
                return {
                    backgroundColor: 'white',
                    borderColor: 'black',
                    borderWidth: 1,
                }
            case TextButtonTypes.red: 
                return {
                    backgroundColor: '#EF3026',
                }
            case TextButtonTypes.transparent:
                return {
                    backgroundColor: 'transparent',
                    borderColor: 'white',
                    borderWidth: 1,
                }
            default:
                return {
                    backgroundColor: 'black'
                }

        }
    }

    render() {
        let {disable} = this.props
        let touchProps = {
                onPress: disable ? () => {
                } : () => {
                    Keyboard.dismiss()
                    this.props.onPress()
                },
                onPressIn: disable ? () => {
                } : () => {
                    Keyboard.dismiss()
                    this.props.onPressIn()
                },
                disable: disable,
                delayPressIn: 0,
                style: [styles.container, this.getStyleFromType(), this.props.style, this.state.validate ?
                    styles.validate : null],
            },
            viewProps = {
                style: [styles.container, this.getStyleFromType(), this.props.style, this.state.validate ?
                    styles.validate : null, {opacity: disable ? 0.5 : 1}],
            },
            withOutFeedbackProps = {
                onPress: disable ? () => {
                } : () => {
                    Keyboard.dismiss()
                    this.props.onPress()
                },
                onPressIn: disable ? () => {
                } : () => {
                    Keyboard.dismiss()
                    this.props.onPressIn()
                },
                delayPressIn: 0,
            },
            textProps = {
                style: [styles.text,
                    {
                        color: this.getTextStyleFromType()
                    }, this.props.textStyle],
                text: this.props.text,
                numberOfLines: 1,
            };
        if (this.props.isWithOutFeedback || disable)
            return <TouchableWithoutFeedback {...withOutFeedbackProps}>
                <View {...viewProps}>
                    <EText {...textProps}/>
                </View>
            </TouchableWithoutFeedback>
        else
            return <TouchableOpacity {...touchProps}>
                <EText {...textProps}/>
            </TouchableOpacity>;
    }
}

EButton.propTypes = {
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func,
    onPressIn: PropTypes.func,
    style: ViewPropTypes.style,
    type: PropTypes.number, //one of TextButtonTypes
    textStyle: Text.propTypes.style,
    disable: PropTypes.bool,
    isWithOutFeedback: PropTypes.bool,
}

EButton.defaultProps = {
    text: 'Button',
    onPress: () => {
    },
    onPressIn: () => {
    },
    type: TextButtonTypes.black,
    textStyle: null,
    disable: false,
    isWithOutFeedback: false
}