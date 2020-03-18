import React, { Component } from 'react'
import {View, TouchableOpacity} from 'react-native'
import styles from './style'
import PropTypes from 'prop-types';
import _ from 'lodash';
import { goBack } from '../../../../commons/Utils';
import EImage from '../../../elements/EImage';
import EText from '../../../elements/EText';

export default class HeaderTitleComponent extends Component {

  render() {
    let backImage = _.get(this.props.style, 'backgroundColor', '#FFFFFF') === '#FFFFFF' 
                    ? require('../../../../../res/back-icon.png')
                    : require('../../../../../res/back-icon-white.png')
    const { title, showBack } = this.props,
    viewProps = {
      ...this.props,
      style: [styles.view, this.props.style]
    },
    backProps = {
      style: styles.back,
      source: backImage, 
    },
    viewTitleProps = {
      style: styles.viewTitle
    },
    titleProps = {
      style: [styles.text, this.props.titleStyle],
      text: title,
    }
    return (
      <View {...viewProps}>
        {showBack && 
          <TouchableOpacity style={styles.backView} onPress={this.props.onBack}>
            <EImage {...backProps} />
          </TouchableOpacity>
        }
        <View {...viewTitleProps}>
          <EText {...titleProps} />
        </View>
      </View>
    )
  }

}

HeaderTitleComponent.propTypes = {
  title: PropTypes.string,
  showBack: PropTypes.bool,
  onBack: PropTypes.func.isRequired, 
}

HeaderTitleComponent.defaultProps = {
  title: '',
  showBack: false,
  onBack: () => {goBack()}
}
