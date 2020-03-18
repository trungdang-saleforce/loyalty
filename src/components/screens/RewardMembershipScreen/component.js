import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import styles from './style';
import EText from '../../elements/EText';
import moment from 'moment';
import { DATETIME_ZMT_FORMAT, FULL_MONTH_FORMAT } from '../../../commons/Constants';
import { getStrings } from '../../../commons/Strings';
import EImage from '../../elements/EImage';
import EListPointsView from '../../elements/EListPointsView';
import { currency } from '../../../commons/Utils';

export default class RewardMembershipComponent extends Component {
  

  render() {
    const {user} = this.props
    const points = [
      {name: 'Rewards Points', value: currency(user.currentBalancePoints)},
      {name: 'Vouchers', value: currency(user.vouchers)},
      {name: 'Offers', value: currency(user.offers)}
    ]
    const sinceProps = {
      text: getStrings().registerDate(moment(user.registerDate, DATETIME_ZMT_FORMAT).format(FULL_MONTH_FORMAT)),
      style: styles.since
    },
    remindQRCodeProps = {
      text: getStrings().remindScanQRCode(user.name),
      style: styles.since
    },
    viewQRCodeProps = {
      style: styles.viewQRCode
    },
    QRCodeProps = {
      uri: user.qrcodeImage,
      style: styles.qrcode
    }
    return (
      <ScrollView>
        <View style={styles.content}>
          <EText {...sinceProps} />
          <EText {...remindQRCodeProps} />
          <View {...viewQRCodeProps}>
            <EImage {...QRCodeProps} />
          </View>
          <EListPointsView data={points} />
        </View>
      </ScrollView>
    )
  }

}
