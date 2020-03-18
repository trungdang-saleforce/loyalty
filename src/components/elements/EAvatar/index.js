/*
*
@author tri.tran on 2/19/19
*
*/

import React, {Component} from 'react'
import { TouchableOpacity, View, ViewPropTypes } from 'react-native'
import PropTypes from 'prop-types'
import styles from './style'
import _ from 'lodash'
import EImage from '../EImage';

export default class EAvatar extends Component {

    render() {
        const {avatar, onPress} = this.props
        const avatarStyle = [styles.avatar, this.props.style]
        const viewProps = {
            style: styles.view,
            onPress
        },
        avatarProp = _.isEmpty(avatar) ? {style: avatarStyle, source: require('../../../../res/profile-default.png')}
                    : {style: avatarStyle, uri: avatar},
        editProps = {
            style: styles.edit,
        },
        iconProps = {
            source: require('../../../../res/edit-icon.png'),
            style: styles.icon,
            resizeMode: 'stretch'
        }
        return (
            <TouchableOpacity {...viewProps}>
                <EImage {...avatarProp} />
                <View {...editProps}>
                    <EImage {...iconProps} />
                </View>
            </TouchableOpacity>
        )
    }
    
}

EAvatar.propTypes = {
    avatar: PropTypes.string,
    onPress: PropTypes.func,
    style: ViewPropTypes.style,
}
EAvatar.defaultProps = {
    avatar: '',
    onPress: () => {},
    style: null
}
