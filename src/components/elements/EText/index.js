/*
*
@author tri.tran on 2/15/19
*
*/

import React, {Component} from 'react'
import {Text} from 'react-native'
import PropTypes from 'prop-types'
import styles from './style'

export default class EText extends Component {
    render() {
        let textProps = {
            style: [styles.text, this.props.style],
            numberOfLines: this.props.numberOfLines,
        }
        return (
            <Text {...textProps} onPress={this.props.onPress !== null ? this.props.onPress : null}>
                {this.props.text}
            </Text>
        )
    }
}

EText.defaultProps = {
    text: '',
    style: null,
    numberOfLines: null,
    onPress: null
}

EText.propTypes = {
    text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    onPress: PropTypes.func,
    style: Text.propTypes.style,
    numberOfLines: PropTypes.number,
}
