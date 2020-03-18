import React, {Component} from 'react';
import {View} from 'react-native';
import styles from './style';
import { HISTORY_VOUCHER } from '../../../commons/Constants';
import EListHistoryRewards from '../../elements/list/EListHistoryRewards';
import { getStrings } from '../../../commons/Strings';
import EText from '../../elements/EText';
import { currency } from '../../../commons/Utils';
import { getStore } from '../../../../App';
import { actions } from '../../../redux/actions';

export default class RewardHistoryComponent extends Component {
  
  componentDidMount() {
    getStore().dispatch(actions.doGetHistoryVoucher());
  }

  render() {
    const {user, histories} = this.props,
    balanceProps = {
      style: styles.balance
    },
    balanceValueProps = {
      style: styles.balanceValue,
      text: currency(user.currentBalancePoints) || '45,000',
    },
    balanceTextProps = {
      style: styles.balanceText,
      text: getStrings().balanceText,
    }
    return (
      <View style={styles.view}>
        <View {...balanceProps}>
          <EText {...balanceTextProps} />
          <EText {...balanceValueProps} />
        </View>
        <EListHistoryRewards data={histories} />
      </View>
    )
  }

}
