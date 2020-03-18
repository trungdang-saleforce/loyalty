import React, {Component} from 'react';
import {FlatList} from 'react-native';
import PropTypes from 'prop-types';
import _ from 'lodash';
import styles from './style';
import EItemListRewards from '../../EItemListRewards';

export default class EListRewards extends Component {

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
    return <EItemListRewards {...itemData.item} />
  }

  render() {
    return <FlatList {...this.dataProps} />
  }

}

EListRewards.propTypes = {
  data: PropTypes.array
}

EListRewards.defaultProps = {
  data: []
}