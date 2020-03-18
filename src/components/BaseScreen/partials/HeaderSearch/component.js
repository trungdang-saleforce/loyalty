import React, { Component } from 'react'
import {View, TouchableOpacity} from 'react-native'
import styles from './style'
import PropTypes from 'prop-types';
import _ from 'lodash';
import { goBack } from '../../../../commons/Utils';
import ETextInput from '../../../elements/ETextInput';
import EImage from '../../../elements/EImage';
import { getStore } from '../../../../../App';
import { actions } from '../../../../redux/actions';

export default class HeaderSearchComponent extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      searchKey: this.props.searchText || '',
    }
  }

  searchHandle = () => {
    const {searchKey} = this.state
    getStore().dispatch(actions.doSearch(searchKey));
    this.props.onSearch(searchKey);
  } 

  changeTextHandle = (e) => {
    this.setState({searchKey: e}, () => {
      this.props.onChangeText()
    })
  }

  backHandle = () => {
    goBack();
    this.props.onBack();
  }

  render() {
    const { showBack } = this.props,
    viewProps = {
      ...this.props,
      style: styles.view,
      onBlur: () => this.searchHandle()
    },
    backProps = {
      style: styles.back,
      source: require('../../../../../res/back-icon.png'), 
    },
    searchProps = {
      style: styles.searchText(showBack),
      placeHolder: 'Find a store...',
      value: this.state.searchKey,
      onPress: () => this.searchHandle(),
      onChangeText: (e) => this.changeTextHandle(e), 
    },
    searchIconProps = {
      source: require('../../../../../res/search-icon-black.png'),
      style: styles.searchIcon
    }
    return (
      <View {...viewProps}>
        {showBack && 
        <TouchableOpacity onPress={() => this.backHandle()}>
          <EImage {...backProps} />
        </TouchableOpacity>
        }
        <ETextInput {...searchProps} />
        <EImage {...searchIconProps} />
      </View>
    )
  }

}

HeaderSearchComponent.propTypes = {
  searchText: PropTypes.string, 
  onSearch: PropTypes.func,
  onChangeText: PropTypes.func,
  showBack: PropTypes.bool,
  onBack: PropTypes.func.isRequired, 
}

HeaderSearchComponent.defaultProps = {
  searchText: '', 
  onSearch: () => {},
  onChangeText: () => {},
  showBack: false,
  onBack: () => {goBack()}
}
