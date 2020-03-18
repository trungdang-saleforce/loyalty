import React, {Component} from 'react';
import {FlatList} from 'react-native';
import PropTypes from 'prop-types';
import _ from 'lodash';
import styles from './style';
import EItemListHistoryReward from '../../EItemListHistoryReward';

export default class EListHistoryRewards extends Component {

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
    return <EItemListHistoryReward {...itemData.item} />
  }

  render() {
    return <FlatList {...this.dataProps} />
  }

}

EListHistoryRewards.propTypes = {
  data: PropTypes.array
}

EListHistoryRewards.defaultProps = {
  data: []
}