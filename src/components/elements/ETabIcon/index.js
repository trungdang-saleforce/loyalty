import React, {Component} from 'react';
import {Image, View} from 'react-native';
import PropTypes from 'prop-types';

import styles from './style'

export default class ETabIcon extends Component {
  render() {
    const {isNotified} = this.props
    let imageProps = {
      source: this.props.icon,
      style: [styles.image],
      resizeMode: 'contain'
    }
    return (
      <View style={styles.container}>
        <Image {...imageProps} />
        {
          isNotified && <View style={styles.badgeContainer}/>
        }
      </View>

    )
  }
}

ETabIcon.propTypes = {
  icon: PropTypes.number.isRequired,
  isNotified: PropTypes.bool,
}

ETabIcon.defaultProps = {
  icon: require('../../../../res/home-icon.png'),
  isNotified: false
}
