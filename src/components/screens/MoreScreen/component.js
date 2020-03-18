import React, {Component} from 'react';
import {View} from 'react-native';
import {NavigationActions} from 'react-navigation';
import styles from './style';
import BaseScreen from '../../BaseScreen';
import EText from '../../elements/EText';
import { appScreenName } from '../../../commons/Constants';
import EList from '../../elements/list/EList';
import { getStore } from '../../../../App';
import { actions } from '../../../redux/actions';

const data = (name, avatar) => {
  return [
    {
      image: avatar, 
      title: name, 
      onPress: () => {getStore().dispatch(NavigationActions.navigate({routeName: appScreenName.profile}))}
    },
    {
      source: require('../../../../res/logout-icon.png'), 
      title: 'Log out', 
      onPress: () => {getStore().dispatch(actions.doLogout())}
    },
  ]
} 

export default class MoreComponent extends Component {
  
  render() {
    const {name, avatarImage} = this.props.user
    const headerProps = {
      style: styles.headerTitle,
      text: 'More'
    }
    return (
      <BaseScreen>
        <View style={styles.view}>
          <EText {...headerProps} />
          <EList data={data(name, avatarImage)} />
        </View>
      </BaseScreen>
    )
  }

}
