/*
*
@author tri.tran on 2/18/19
*
*/

import React, {Component} from 'react'
import {Modal, TouchableWithoutFeedback, View, ViewPropTypes} from 'react-native'
import styles from './style'
import PropTypes from 'prop-types'

export default class EDialog extends Component {
    render() {
        let modalProps = {
                animationType: "none",
                transparent: true,
                visible: this.props.show,
                onRequestClose: () => {
                }
            },
            containerProps = {
                style: styles.container,
            },
            touchProps = {
                onPress: this.props.onTouchOver
            },
            touchViewProps = {
                style: styles.container
            },
            contentViewProps = {
                style: [styles.dialog, this.props.style]
            }

        return (
            <Modal {...modalProps}>
                <View {...containerProps}>
                    <TouchableWithoutFeedback {...touchProps}>
                        <View {...touchViewProps}/>
                    </TouchableWithoutFeedback>
                    <View {...contentViewProps}>
                        {
                            this.props.children
                        }
                    </View>
                </View>
            </Modal>
        )
    }
}

EDialog.defaultProps = {
    show: false,
    onTouchOver: ()=>{},
    style: null
}

EDialog.propTypes = {
    ...ViewPropTypes,
    show: PropTypes.bool.isRequired,
    onTouchOver: PropTypes.func,
    style: ViewPropTypes.style
}