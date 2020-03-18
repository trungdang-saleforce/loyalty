import React, {Component} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {NavigationActions} from 'react-navigation';
import EImage from '../EImage';
import EText from '../EText';
import styles from './style';
import PropTypes from 'prop-types';
import _ from 'lodash';
import newIcon from '../../../../res/new-icon.png';
import likeIcon from '../../../../res/coffee/love-icon.png';
import locationIcon from '../../../../res/coffee/location-icon.png';
import {getStore} from '../../../../App';
import { searchScreenName } from '../../../commons/Constants';
import { actions } from '../../../redux/actions';

export default class EItemListSearch extends Component {

  onLocation = () => {
    const {productId} = this.props
    getStore().dispatch(NavigationActions.navigate({
      routeName: searchScreenName.searchDetail, 
      params: {productId}
    }));
  } 

  onLike = () => {
    const {productId} = this.props
    getStore().dispatch(actions.doLikeProduct(productId));
  }

  render() {
    const {image, source, title, description, hasNew} = this.props
    const viewProps = {
      style: styles.view,
    },

    pressProps = {
      onPress: () => this.onLocation()
    },
    imageProps = _.isEmpty(image) ? {style: styles.imageIcon, source} 
                                  : {style: styles.imageIcon, uri: image},
    hasNewProps = {
      style: styles.hasNew,
      source: newIcon
    },
    featuresProps = {
      style: styles.features
    }
    onLikeProps = {
      onPress: () => {this.onLike()}
    },
    likeProps = {
      style: styles.like,
      source: likeIcon,
    },
    onLocationProps = {
      onPress: () => {this.onLocation()}
    },
    locationProps = {
      style: styles.location,
      source: locationIcon,
    },
    contentProps = {
      style: styles.content,
      onPress: () => {this.onLocation()}
    },
    titleProps = {
      style: styles.title,
      text: _.toUpper(title),
    },
    descriptionProps = {
      style: styles.description,
      text: description,
    }
    return (
      <View {...viewProps}>
        <TouchableOpacity {...pressProps}>
          <EImage {...imageProps} />
        </TouchableOpacity>
        {hasNew && <EImage {...hasNewProps} />}
        <View {...featuresProps}>
          
          <TouchableOpacity {...onLocationProps}>
            <EImage {...locationProps}/>
          </TouchableOpacity>
        </View>
        <TouchableOpacity {...contentProps}>
          <EText {...titleProps}/>
          <EText {...descriptionProps} />
        </TouchableOpacity>
      </View>
    )
  }

}

EItemListSearch.propTypes = {
  image: PropTypes.string.isRequired,
  source: PropTypes.number,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  hasNew: PropTypes.bool.isRequired,
  onPress: PropTypes.func,
}

EItemListSearch.defaultProps = {
  image: '',
  source: require('../../../../res/nestea-1.png'),
  title: '',
  description: '',
  hasNew: false,
  onPress: () => {}
}