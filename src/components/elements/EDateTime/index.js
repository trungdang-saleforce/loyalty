import React, {Component} from 'react';
import {View, TouchableOpacity} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import styles from './style';
import PropTypes from 'prop-types';
import { DATETIME_TYPE, DEFAULT_DATE_FORMAT } from '../../../commons/Constants';
import EText from '../EText';
import EImage from '../EImage';
import iconCalendar from '../../../../res/calendar-icon.png';
import _ from 'lodash';
import moment from 'moment';

export default class EDateTime extends Component {

  state = {
    showView:  false
  }

  showDateTimePicker = () => {
    this.setState({ showView: true });
  };
 
  hideDateTimePicker = () => {
    this.setState({ showView: false });
  };
 
  handleDatePicked = (date) => {
    const value = moment(date).format(this.props.formatValue)
    this.props.onChange(value);
    this.hideDateTimePicker();
  };

  render() {
    const textValue = _.isEmpty(this.props.value) ? DEFAULT_DATE_FORMAT : this.props.value
    const viewProps = {
      style: styles.view
    },
    showViewProps = {
      style: styles.showView
    },
    valueProps = {
      style: styles.value,
      text: _.toLower(textValue)
    },
    buttonProps = {
      style: styles.button,
      text: 'Date',
      onPress: () => this.showDateTimePicker()
    }
    iconProps = {
      style: styles.icon,
      source: this.props.iconButton,
    }
    return (
      <View {...viewProps}>
        <View {...showViewProps}>
          <EText {...valueProps} />
          <TouchableOpacity {...buttonProps}>
            <EImage {...iconProps} />
          </TouchableOpacity>
        </View>
        <DateTimePicker
          isVisible={this.state.showView}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDateTimePicker}
        />
      </View>
    )
  }

}

EDateTime.propTypes = {
  value: PropTypes.string,
  formatValue: PropTypes.string.isRequired,
  type: PropTypes.string,
  showButton: PropTypes.bool.isRequired,
  iconButton: PropTypes.number,
  onChange: PropTypes.func,
}

EDateTime.defaultProps = {
  value: DEFAULT_DATE_FORMAT,
  formatValue: DEFAULT_DATE_FORMAT,
  type: DATETIME_TYPE.DATE,
  showButton: true,
  iconButton: iconCalendar,
  onChange: () => {},
}
