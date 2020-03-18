import React, {Component} from 'react';
import {Easing, View} from 'react-native';
import {addNavigationHelpers, StackNavigator} from 'react-navigation'
import {addListener} from '../../../redux/stores/ReactNavigationRedux'
import SearchMainScreen from '../SearchMainScreen';
import SearchDetailScreen from '../SearchDetailScreen';
import { fade } from '../../../commons/Constants';

// Create app stack navigator
export const SearchScreenNavigator = StackNavigator(
  {
      searchMain: SearchMainScreen,
      searchDetail: SearchDetailScreen,
  },
  {
      navigationOptions: {
          header: null,
      },
      transitionConfig: () => ({
          transitionSpec: {
              duration: 0,
              easing: Easing.linear,
          },
          screenInterpolator: (props) => {
              return fade(props)
          }
      })
  }
)

export default class SearchComponent extends Component {
  
  render() {
    const {dispatch, searchTabs} = this.props;
    return (
      <View style={{
        flex: 1
    }}>
        <SearchScreenNavigator
            navigation={addNavigationHelpers({dispatch, state: searchTabs, addListener})}/>
    </View>
    )
  }

}
