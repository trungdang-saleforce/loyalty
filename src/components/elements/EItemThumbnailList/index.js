import React, {Component} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {NavigationActions} from 'react-navigation';
import EImage from '../EImage';
import EText from '../EText';
import styles from './style';
import PropTypes from 'prop-types';
import { isEmpty } from '../../../commons/Utils';
import _ from 'lodash';
import { getStore } from '../../../../App';
import { appScreenName } from '../../../commons/Constants';

export default class EItemThumbnailList extends Component {

  pressItem = () => {
    //open web link
    const {webLink} = this.props
    getStore().dispatch(NavigationActions.navigate({routeName: appScreenName.webview, params: webLink}))
  }

  render() {
    const {image, source, title, description} = this.props
    const viewProps = {
      style: styles.view,
      onPress: () => {this.pressItem()}
    },
    imageProps = isEmpty(image) ? {style: styles.imageIcon, source} 
                                  : {style: styles.imageIcon, uri: image},
    describeProps = {
      style: styles.describe,
    },
    titleProps = {
      style: styles.title,
      text: _.toUpper(title),
    },
    briefProps = {
      style: styles.brief,
      text: description
    }
    const hasContent = !isEmpty(title) || !isEmpty(description)
    return (
      <TouchableOpacity {...viewProps}>
        <EImage {...imageProps} />
        {hasContent &&
          <View {...describeProps}>
            {!isEmpty(title) && <EText {...titleProps} />}
            {!isEmpty(description) && <EText {...briefProps} />}
          </View>
        }
      </TouchableOpacity>
    )
  }

}

EItemThumbnailList.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  hasDescribe: PropTypes.bool.isRequired,
  source: PropTypes.number,
  image: PropTypes.string.isRequired,
  onPress: PropTypes.func,
}

EItemThumbnailList.defaultProps = {
  title: '',
  description: '',
  hasDescribe: true,
  image: '',
  source: require('../../../../res/default-image.png'),
  onPress: () => {}
}