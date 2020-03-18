import React, {Component} from 'react';
import {FlatList, View} from 'react-native';
import PropTypes from 'prop-types';
import _ from 'lodash';
import styles from './style';
import EItemThumbnailList from '../../EItemThumbnailList';
import EText from '../../EText';

export default class EListThumbnail extends Component {

  get dataProps() {
    const {data} = this.props
    return {
      style: styles.list,
      renderItem: this.renderItem,
      keyExtractor: (item, _key) => {return _key.toString()},
      data: data
    }
  }

  renderItem = (itemData) => {
    const {name, description, image, web_link} = itemData.item
    
    return <EItemThumbnailList {...itemData.item} />
  }

  render() {
    const {title, subContent} = this.props,
    titleProps = {
      text: _.toUpper(title),
      style: styles.title
    },
    subContentProps = {
      text: subContent,
      style: styles.subContent
    }
    return (
      <View>
        {!_.isEmpty(title) && (<EText {...titleProps} />)}
        {!_.isEmpty(subContent) && (<EText {...subContentProps} />)}
        <FlatList {...this.dataProps} />
      </View>
    )
  }

}

EListThumbnail.propTypes = {
  data: PropTypes.array
}

EListThumbnail.defaultProps = {
  data: []
}