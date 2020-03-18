import React, {Component} from 'react';
import {FlatList} from 'react-native';
import PropTypes from 'prop-types';
import _ from 'lodash';
import styles from './style';
import EItemListSearch from '../../EItemListSearch';

export default class EListSearch extends Component {

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
    return <EItemListSearch {...itemData.item} />
  }

  render() {
    return <FlatList {...this.dataProps} />
  }

}

EItemListSearch.propTypes = {
  data: PropTypes.array
}

EItemListSearch.defaultProps = {
  data: []
}