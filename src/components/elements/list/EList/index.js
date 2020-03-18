import React, {Component} from 'react';
import {FlatList} from 'react-native';
import PropTypes from 'prop-types';
import _ from 'lodash';
import styles from './style';
import EItemList from '../../EItemList';

export default class EList extends Component {

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
    return <EItemList {...itemData.item} />
  }

  render() {
    return <FlatList {...this.dataProps} />
  }

}

EList.propTypes = {
  data: PropTypes.array
}

EList.defaultProps = {
  data: []
}