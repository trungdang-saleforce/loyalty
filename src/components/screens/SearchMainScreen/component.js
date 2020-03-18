import React, { Component } from 'react';
import { View } from 'react-native';
import styles from './style';
import BaseScreen from '../../BaseScreen';
import { HEADER_TYPE } from '../../../commons/Constants';
import EText from '../../elements/EText';
import { getStore } from '../../../../App';
import { actions } from '../../../redux/actions';
import { isEmpty } from '../../../commons/Utils';
import EListSearch from '../../elements/list/EListSearch';
import _ from 'lodash';

export default class SearchMainComponent extends Component {

  searchHandle = (key) => {
    getStore().dispatch(actions.getProduct(key));
  }

  render() {
    const {searchKey, products} = this.props
    const baseProps = {
      style: {backgroundColor: '#FFF'},
      typeHeader: HEADER_TYPE.SEARCH,
      searchText: searchKey || '', 
      onSearch: (key) => {this.searchHandle(key)},
    },
    searchProps = {
      style: styles.search
    }
    let searchText = isEmpty(searchKey) ? 'Search Result'
                    : '(' + _.size(products) + ') ' + 'Search Result: ' + searchKey
    const searchTextProps = {
      style: styles.searchText,
      text: searchText,
    }
    return (
      <BaseScreen {...baseProps}>
        <View {...searchProps}>
          <EText {...searchTextProps} />
        </View>
        <EListSearch data={products} />
      </BaseScreen>
    )
  }

}