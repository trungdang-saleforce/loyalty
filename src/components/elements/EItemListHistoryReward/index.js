import React, {Component} from 'react';
import {View} from 'react-native';
import styles from './style';
import PropTypes from 'prop-types';
import _ from 'lodash';
import EText from '../EText';
import { getStrings } from '../../../commons/Strings';
import { HISTORY_DESCRIPTION } from '../../../commons/Constants';

export default class EItemListHistoryReward extends Component {

  /*
    history voucher infor: name, price, points, description
    "voucherName": "Voucher 2 bia tươi Gammer và 1 xúc xích",
    "voucherId": 2,
    "price": 300,
    "uAvailables": 1,
    "loyaltyProgramId": 7,
    "currency": "VND",
    "rewardDate": "04/06/2019",
    "point": 4000
  */

  get getDescription() {
    const {uAvailables, price, voucherName} = this.props
    return HISTORY_DESCRIPTION(uAvailables, price, voucherName);
  }

  render() {
    const { voucherName, price, point, currency } = this.props
    const viewProps = {
      style: styles.view,
    },
    titleProps = {
      style: styles.title,
    }
    priceProps = {
      style: styles.price,
      text: '$ ' +  price + ' ' + currency,
    },
    nameProps = {
      text: voucherName,
      style: styles.name,
    },
    pointProps = {
      text: getStrings().pointVoucher(point),
      style: styles.point,
    },
    contentProps = {
      style: styles.content,
    }
    // descriptionProps = {
    //   style: styles.description,
    //   text: description
    // }

    return (
      <View {...viewProps}>
        <View {...titleProps}>
          <EText {...priceProps} />
          <EText {...nameProps} />
          <EText {...pointProps} />
        </View>
        <View {...contentProps}>
          {/* <EText {...descriptionProps} /> */}
          {this.getDescription}
        </View>
      </View>
    )
  }

}

EItemListHistoryReward.propTypes = {
  vName: PropTypes.string.isRequired,
  vPrice: PropTypes.number.isRequired,
  vPoints: PropTypes.number.isRequired,
  vImage: PropTypes.string.isRequired,
  uAvailables: PropTypes.number.isRequired,
  onPress: PropTypes.func,
}

EItemListHistoryReward.defaultProps = {
  vName: '',
  vPrice: 0,
  vPoints: 0,
  vImage: '',
  uAvailables: 0,
  onPress: () => {},

}