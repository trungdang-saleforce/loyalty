import React, {Component} from 'react';
import {View} from 'react-native';
import styles from './style';
import PropTypes from 'prop-types';
import _ from 'lodash';
import EImage from '../EImage';
import EText from '../EText';
import { getStrings } from '../../../commons/Strings';
import ECounter from '../ECounter';

export default class EItemListRewards extends Component {

  /*
  voucher infor: loyaltyProgramId, voucherName, price, point, image
  user own available vouchers: uAvailables - PropTypes.number
  */

  render() {
    const {loyaltyProgramId, voucherName, price, point, image, status} = this.props
    const uAvailables = parseInt(this.props.uAvailables)
    const viewProps = {
      style: styles.view,
    },
    viewImageProps = {
      style: styles.viewImage
    },
    imageProps = {
      style: styles.image,
      uri: image,
    },
    contentProps = {
      style: styles.content,
    }
    priceProps = {
      style: styles.price,
      text: "$" + price,
    },
    nameProps = {
      text: voucherName,
      style: styles.name,
    },
    pointProps = {
      text: getStrings().pointVoucher(point),
      style: styles.point,
    },
    counterProps = {
      voucherId: loyaltyProgramId,
      availables: uAvailables,
      status,
    }
    return (
      <View {...viewProps}>
        <View {...viewImageProps}>
          <EImage {...imageProps} />
        </View>
        <View {...contentProps}>
          <EText {...priceProps} />
          <EText {...nameProps} />
          <EText {...pointProps} />
        </View>
        <ECounter {...counterProps} />
      </View>
    )
  }

}

EItemListRewards.propTypes = {
  voucherName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  point: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  // uAvailables: PropTypes.number.isRequired,
  onPress: PropTypes.func,
}

EItemListRewards.defaultProps = {
  voucherName: '',
  price: 0,
  point: 0,
  image: '',
  // uAvailables: 0,
  onPress: () => {},

}