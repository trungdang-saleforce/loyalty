/*
*
@author tri.tran on 3/8/19*
*/

import React, {Component} from 'react'
import {ActivityIndicator, Image, View, TouchableOpacity, Platform} from 'react-native'
import PropTypes from 'prop-types'
import ImagePicker from 'react-native-image-crop-picker';
import FastImage from 'react-native-fast-image'
import styles from './style'
import EText from "../EText";

const IMAGE_FORMAT = (mime, data) => {
  return `data:${mime};base64, ${data}`
}

export default class EImageChange extends Component {

    constructor(props) {
        super(props);
        this.state = {
          imageUpdate: this.props.uri,
          isLoading: true
        }
    }

    btChangeImageClick() {
        const {cropHeight, cropWidth, isCrop} = this.props
        ImagePicker.openPicker({
            width: cropWidth,
            height: cropHeight,
            cropping: isCrop,
            includeBase64: true,
        }).then(image => {
          this.reloadAfterUpdate(image)
        });
    }

    reloadAfterUpdate(image) {
        const dataBase64 = IMAGE_FORMAT(image.mime, image.data)
        this.setState({
          imageUpdate: dataBase64,
        }, () => {
          this.props.onImageChange(dataBase64);
        })
    }

    getImage() {
        let {imageUpdate} = this.state;
        if(imageUpdate && this.props.scale && imageUpdate.startsWith('http'))
          imageUpdate = `${imageUpdate}`
        let imageProps = {
                source: {
                    uri: imageUpdate,
                },
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

        return (
          <FastImage  {...imageProps}>
              <View {...activityContainerProps}>
                  <ActivityIndicator  {...activityIndicatorProps} />
              </View>
          </FastImage>
      )
    }

    render() {
        const {label, borderRadius, overlayColor} = this.props
        const labelProps = {
            text: label,
            style: styles.label
        }
        const cameraImageProps = {
            source: require('../../../../res/edit-icon.png'),
            style: styles.camera
        }
        const touchProps = {
            onPress: ()=> {
                this.btChangeImageClick()
            }
        }

        return (
            <TouchableOpacity {...touchProps}>
                {this.getImage()}
                <View style={styles.uploadContainer}>
                    <Image {...cameraImageProps}/>
                    <EText {...labelProps} />
                </View>
            </TouchableOpacity>
        )
    }
}

EImageChange.propTypes = {
    uri: PropTypes.string.isRequired,
    style: Image.propTypes.style,
    resizeMode: PropTypes.string,
    cache: PropTypes.bool,
    isCrop: PropTypes.bool,
    scale: PropTypes.object,
    borderRadius: PropTypes.number,
    cropWidth: PropTypes.number,
    cropHeight: PropTypes.number,
    onLoad: PropTypes.func,
    onPress: PropTypes.func,
    onImageChange: PropTypes.func,
    overlayColor: PropTypes.string
}
EImageChange.defaultProps = {
    uri: '',
    style: null,
    resizeMode: 'contain',
    cache: true,
    borderRadius: 0,
    cropWidth: 400,
    cropHeight: 400,
    isCrop: true,
    overlayColor: 'transparent',
    onLoad:()=>{

    },
    onPress:()=>{

    },
    onImageChange:()=>{

    }
}
