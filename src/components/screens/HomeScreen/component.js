/*
*
@author tri.tran on 2/19/19
*
*/

import React, {Component} from 'react'
import {View} from 'react-native';
import {addNavigationHelpers, TabNavigator} from 'react-navigation'
import {addListener} from '../../../redux/stores/ReactNavigationRedux'
import ETabIcon from '../../elements/ETabIcon';
import EDisappearingTabBar from '../../elements/EDisappearingTabBar';
import ProductScreen from '../ProductScreen';
import SpecialOfferScreen from '../SpecialOfferScreen';
import SearchScreen from '../SearchScreen';
import RewardScreen from '../RewardScreen';
import MoreScreen from '../MoreScreen';
import EText from '../../elements/EText';
import styles from './style';
import {HOME_TABS} from '../../../commons/Constants'
import _ from 'lodash';

class HomeTab extends Component {
  render() {
    const { name, uri, uriFocus, hasFocus } = this.props
    const viewTabIcon = {
      style: styles.viewTabIcon
    },
    iconProps = {
      icon: hasFocus ? uriFocus : uri
    },
    textProps = {
      text: name,
      style: hasFocus ? styles.textFocus : styles.text
    }
    return (
      <View {...viewTabIcon}>
        <ETabIcon {...iconProps}/>
        <EText {...textProps} />
      </View>
    )
  }
}

export const HomeTabNavigation = TabNavigator(
  {
    product: {screen: ProductScreen},
    search: {screen: SearchScreen},
    specialOffer: {screen: SpecialOfferScreen},
    reward: {screen: RewardScreen},
    more: {screen: MoreScreen},
  },
  {
    navigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused}) => {
        const {routeName} = navigation.state;
        if(_.has(HOME_TABS, routeName)) {
          const {name, uri, uriFocus} = HOME_TABS[routeName]
          const tabProps = {
            name, uri, uriFocus, hasFocus: focused
          }
          return <HomeTab {...tabProps} />
        }
        return null
      }
    }),
    swipeEnabled: false,
    animationEnabled: false,
    configureTransition: () => {
    },
    backBehavior: 'none',

    tabBarPosition: 'bottom',
    tabBarComponent: EDisappearingTabBar,
    tabBarOptions: {
      style: {
        backgroundColor: '#000000',
        height: 50,
      },
      showLabel: false
    },
  }
)


export default class HomeComponent extends Component {
  render() {
    const {dispatch, navTab, totalUnread} = this.props;
    return (
      <HomeTabNavigation screenProps={{
        totalUnread,
      }}
       navigation={addNavigationHelpers({dispatch, state: navTab, addListener})}/>
    )
  }
}
