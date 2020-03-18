import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import EImage from '../EImage';
import EText from '../EText';
import styles from './style';
import PropTypes from 'prop-types';
import _ from 'lodash';

export default class EItemList extends Component {

  pressItem = () => {
    this.props.onPress()
  }

  render() {
    const {image, title, source} = this.props
    const viewProps = {
      style: styles.view,
      onPress: () => {this.pressItem()}
    },
    imageProps = _.isEmpty(image) ? {style: styles.imageIcon, source} 
                                  : {style: styles.imageIcon, uri: image},
    textProps = {
      style: styles.text,
      text: title,
    }
    return (
      <TouchableOpacity {...viewProps}>
        <EImage {...imageProps} />
        <EText {...textProps} />
      </TouchableOpacity>
    )
  }

}

EItemList.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  source: PropTypes.number,
  onPress: PropTypes.func,
}

EItemList.defaultProps = {
  title: 'Title name',
  image: '',
  source: require('../../../../res/logout-icon.png'),

}