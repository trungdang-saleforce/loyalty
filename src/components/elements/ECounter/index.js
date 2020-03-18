import React, {Component} from 'react';
import {View, ViewPropTypes} from 'react-native';
import styles from './style';
import EButton, { TextButtonTypes } from '../EButton';
import PropTypes from 'prop-types';
import _ from 'lodash';
import EText from '../EText';
import { getStrings } from '../../../commons/Strings';
import { getStore } from '../../../../App';
import { actions } from '../../../redux/actions';

export default class ECounter extends Component {

  state = {
    counting: 0,
  }

  handleChange = (hasIncrease) => {
    let _count = hasIncrease ? 1 : -1
    let newCounting = this.state.counting + _count;
    if(newCounting < 0) newCounting = 0;
    this.setState({counting: newCounting})
  }

  handleRedeem = () => {
    const {voucherId} = this.props;
    getStore().dispatch(actions.doChangeAvailableVoucher(voucherId, this.state.counting));
  }

  render() {
    const {availables, status, style} = this.props
    const viewProps = {
      style: [styles.view, style]
    },
    countProps = {
      style: styles.count
    },
    decreaseProps = {
      style: styles.counter,
      textStyle: styles.counterText,
      text: '-',
      onPress: () => this.handleChange(false),
    },
    countValueProps = {
      style: styles.countValue,
      text: this.state.counting
    },
    increaseProps = {
      style: styles.counter,
      textStyle: styles.counterText,
      text: '+',
      onPress: () => this.handleChange(true),
    },
    availableProps = {
      style: styles.available
    },
    valueProps = {
      style: styles.availableValue,
      text: availables,
    },
    textProps = {
      style: styles.text,
      text: getStrings().available
    },
    redeemProps = {
      style: styles.redeemView,
    },
    redeemButtonProps = {
      text: 'Redeem',
      onPress: () => this.handleRedeem(),
      style: styles.redeemButton,
      type: TextButtonTypes.black, 
    }
    return (
      <View {...viewProps}>
        <View {...countProps}>
          <EButton {...decreaseProps} />
          <EText {...countValueProps} />
          <EButton {...increaseProps} />
        </View>
        {(_.isNumber(availables) && availables > 0) ?
        (<View {...availableProps}>
          <EText {...valueProps} />
          <EText {...textProps} />
        </View>)
        : <View {...availableProps}></View>
        }
        <View {...redeemProps}>
          {status && 
            <EButton {...redeemButtonProps} />
          }
        </View>
      </View>
    )
  }

}

ECounter.propTypes = {
  value: PropTypes.number,
  style: ViewPropTypes.style,
  onChange: PropTypes.func,
}

ECounter.defaultProps = {
  value: 0,
  style: null,
  onChange: () => {},
}