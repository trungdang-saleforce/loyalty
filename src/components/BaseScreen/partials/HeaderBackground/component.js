import React, { Component } from 'react'
import {View} from 'react-native'
import style from './style'
import EImage from '../../../elements/EImage';
import PropTypes from 'prop-types';
import _ from 'lodash';

export default class HeaderBackgroundComponent extends Component {
  
  render() {
    const { headerImage, sourceImage } = this.props
    const viewProps = {
      ...this.props,
      style: style.view
    },
    backgroundProps = _.isEmpty(headerImage) 
    ? {
      style: style.background,
      source: sourceImage
    }
    : {
      style: style.background,
      uri: headerImage
    }
    return (
      <View {...viewProps}>
        <EImage {...backgroundProps} />
      </View>
    )
  }

}

HeaderBackgroundComponent.propTypes = {
  headerImage: PropTypes.string,
  sourceImage: PropTypes.number, 
}

HeaderBackgroundComponent.defaultProps = {
  headerImage: '',
  sourceImage: require('../../../../../res/coffee/bg-header-coffee.jpg')
}
