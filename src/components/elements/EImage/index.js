/*
*
@author tri.tran on 2/19/19
*
*/

import React, {Component} from 'react'
import {ActivityIndicator, Image, View} from 'react-native'
import PropTypes from 'prop-types'
import FastImage from 'react-native-fast-image'
import styles from './style'
import _ from 'lodash'

export default class EImage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    render() {
        let uri = this.props.uri ;
        if(uri && this.props.scale && uri.startsWith('http'))
            uri = `${uri}?w=${this.props.scale.width}&h=${this.props.scale.height}`
        let imageProps = {
                source: _.isEmpty(uri) ? this.props.source : {uri: uri},
                style: [styles.image, this.props.style],
                resizeMode: this.props.resizeMode ? this.props.resizeMode : FastImage.resizeMode.contain,
                onLoadStart: () => this.setState({ isLoading: true }),
                onLoad: (evt) => {
                    this.setState({ isLoading: false })
                    this.props.onLoad(evt.nativeEvent.width,evt.nativeEvent.height)
                }
            },
            activityIndicatorProps = {
                animating: this.state.isLoading,
                size: 'small',
                color:'gray',
                style: { alignSelf: 'center' }
            },
            activityContainerProps = {
                style: { flex: 1, justifyContent: 'center', alignItems: 'center' }
            };

        let image;
        if (uri && uri.startsWith('http') && this.props.cache)
            image = (
                <FastImage  {...imageProps}>
                    <View {...activityContainerProps}>
                        <ActivityIndicator  {...activityIndicatorProps} />
                    </View>
                </FastImage>
            );
        else
            image = <Image {...imageProps} />
        return (
            image
        )
    }
}

EImage.propTypes = {
    source: PropTypes.number,
    uri: PropTypes.string.isRequired,
    style: Image.propTypes.style,
    resizeMode: PropTypes.string,
    cache: PropTypes.bool,
    scale: PropTypes.object,
    onLoad: PropTypes.func
}
EImage.defaultProps = {
    source: require('../../../../res/home-icon.png'),
    uri: '',
    style: null,
    resizeMode: 'contain',
    cache: true,
    onLoad:()=>{

    }
}
