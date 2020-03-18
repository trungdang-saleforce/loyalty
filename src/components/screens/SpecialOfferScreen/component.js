import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import {NavigationActions} from 'react-navigation';
import styles from './style';
import BaseScreen from '../../BaseScreen';
import { getStore } from '../../../../App';
import { actions } from '../../../redux/actions';
import _ from 'lodash';
import { getStrings } from '../../../commons/Strings';
import searchIcon from '../../../../res/search-icon-black.png';
import EImage from '../../elements/EImage';
import EText from '../../elements/EText';
import EAvatar from '../../elements/EAvatar';
import ETextInput from '../../elements/ETextInput';
import EListThumbnail from '../../elements/list/EListThumbnail';
import { appScreenName, homeTabName, searchScreenName } from '../../../commons/Constants';
import { isEmpty } from '../../../commons/Utils';

export default class SpecialOfferComponent extends Component {
  
  state = {
    searchKey: ''
  }

  searchHandle = () => {
    const {searchKey} = this.state
    if(!isEmpty(searchKey)) {
      getStore().dispatch(NavigationActions.navigate({routeName: homeTabName.search}));
      getStore().dispatch(NavigationActions.navigate({routeName: searchScreenName.searchMain}));
      getStore().dispatch(actions.getProduct(searchKey));
      getStore().dispatch(actions.doSearch(searchKey));
    }
  }

  componentDidMount() {
    getStore().dispatch(actions.getSpecialOffer());
  }

  render() {
    const {list, name, avatarImage} = this.props
    const avatarProps = {
      avatar: avatarImage,
      onPress: () => {getStore().dispatch(NavigationActions.navigate({routeName: appScreenName.profile}))}
    }
    const productProps = {
      style: styles.productView
    }
    const nameProps = {
      style: styles.nameView,
      text: 'Hi' + name
    },
    describeProps = {
      style: styles.describeView,
      text: getStrings().describeProductScreen
    },
    searchProps = {
      style: styles.searchView
    }
    iconSearchProps = {
      source: searchIcon,
      style: styles.iconSearchView,
    },
    textSearchProps = {
      placeholder: 'Search...',
      style: styles.textSearch,
      onChangeText: (text) => {this.setState({searchKey: text})},
      onBlur: () => this.searchHandle()
    },
    listOfferProps = {
      title: 'Special',
      subContent: getStrings().contenSpecialOfferScreen,
      data: list,
      style: styles.listView
    }
    return (
      <BaseScreen>
        <View style={styles.view}>
          <EAvatar {...avatarProps} />
        </View>
        <ScrollView {...productProps}>
          <EText {...nameProps}/>
          <EText {...describeProps} />
          <View {...searchProps}>
            <EImage {...iconSearchProps} />
            <ETextInput {...textSearchProps} />
          </View>
          <EListThumbnail {...listOfferProps} />
        </ScrollView>
      </BaseScreen>
    )
  }

}
