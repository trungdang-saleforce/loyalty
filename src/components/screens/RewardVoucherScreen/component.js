import React, {Component} from 'react';
import {View, TouchableOpacity} from 'react-native';
import styles from './style';
import EText from '../../elements/EText';
import { getStrings } from '../../../commons/Strings';
import EListRewards from '../../elements/list/EListRewards';
import { getStore } from '../../../../App';
import { actions } from '../../../redux/actions';
import { currency } from '../../../commons/Utils';

export default class RewardVoucherComponent extends Component {
  
  navigateToHistory = () => {
    this.props.onNavigateHistory();
  }

  componentDidMount() {
    getStore().dispatch(actions.doGetVouchers());
  }

  render() {
    const {vouchers, user} = this.props
    const balanceProps = {
      style: styles.balance
    },
    balanceValueProps = {
      style: styles.balanceValue,
      text: currency(user.currentBalancePoints) || '45,000',
    },
    balanceTextProps = {
      style: styles.balanceText,
      text: getStrings().balanceText,
    },
    historyViewProps = {
      style: styles.historyView
    },
    historyTextProps = {
      style: styles.historyText,
      text: 'View history',
    }
    return (
      <View style={styles.view}>
        <View {...balanceProps}>
          <EText {...balanceTextProps} />
          <EText {...balanceValueProps} />
        </View>
        <EListRewards data={vouchers} />
        <View {...historyViewProps}>
          <TouchableOpacity onPress={() => this.navigateToHistory()}>
            <EText {...historyTextProps} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

}
