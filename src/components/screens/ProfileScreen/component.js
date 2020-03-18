import React, {Component} from 'react';
import {View, ScrollView, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import styles from './style';
import BaseScreen from '../../BaseScreen';
import ETextInput from '../../elements/ETextInput';
import EImage from '../../elements/EImage';
import EText from '../../elements/EText';
import { goBack, currency, isEmpty } from '../../../commons/Utils';
import backIcon from '../../../../res/back-icon-black.png';
import editIcon from '../../../../res/edit-icon.png';
import ECheckbox from '../../elements/ECheckbox';
import _ from 'lodash';
import EButton, { TextButtonTypes } from '../../elements/EButton';
import { getStrings } from '../../../commons/Strings';
import EDateTime from '../../elements/EDateTime';
import EListPointsView from '../../elements/EListPointsView';
import EImageChange from '../../elements/EImageChange';
import { getStore } from '../../../../App';
import { actions } from '../../../redux/actions';
import { AVATAR_DEFAULT } from '../../../commons/Constants';

export default class ProfileComponent extends Component {

  state = {
    address: this.props.user.address || "",
    avatarImage: this.props.user.avatarImage || "",
    dateOfBirth: this.props.user.dateOfBirth || "",
    interestedFields: this.props.user.interestedFields || [],
    language: this.props.user.language || "en-English",
    name: this.props.user.name || "",
    phone: this.props.user.phone || "+84 ",
  }

  setInterests = (itemInterest) => {
    itemInterest.isChoose = !itemInterest.isChoose
    let interests = this.state.interestedFields;
    if(itemInterest.isChoose) {
      interests.push(itemInterest.value);
    } else {
      interests = _.filter(interests, (item, k) => { 
        return item !== itemInterest.value 
      });
    }
    this.setState({interestedFields: interests});
  }

  onSubmit = () => {
    console.log('Change state:\n', this.state)
    getStore().dispatch(actions.postProfile(this.state));
  }

  getInterestFields = () => {
    const userFields = this.state.interestedFields
    return _.map(this.props.interestedFields, (item, k) => {
      return {
        value: item.value,
        name: item.name,
        isChoose: _.indexOf(userFields, item.value) >= 0
      }
    })
  }

  get renderBackButton() {
    const backProps = {
      style: styles.backView,
      onPress: () => {goBack()}
    },
    iconBackProps = {
      source: backIcon,
      style: styles.iconBack
    },
    textBackProps = {
      text: 'Back',
      style: styles.textBack
    }
    return (
      <View style={styles.viewProfile}>
        <TouchableOpacity {...backProps}>
          <EImage {...iconBackProps} />
          <EText {...textBackProps} />
        </TouchableOpacity>
      </View>
    )
  }

  onChangeValueText = (name, textname) => {
    this.setState({
      [name]: textname,
    })
  }

  get renderProfile() {
    const {name, dateOfBirth, address, phone} = this.state
    const newEmail = this.props.navigation.getParam('newEmail', '');
    const email = !isEmpty(newEmail) ? newEmail : _.get(this.props.user, 'email', '') 
    inforProps = {
      style: styles.inforView
    }
    return (
      <View {...inforProps}>
        <EditText title={'Name'} value={name} onChangeText={(text) => this.onChangeValueText('name', text)} />
        <View style={{alignItems: 'center'}}>
          <EText style={{fontWeight: 'bold', color: '#000000'}} text={'Date of Birth'} />
          <EDateTime iconButton={editIcon} value={dateOfBirth} onChange={(date) => this.onChangeValueText('dateOfBirth', date)} />
        </View>
        <EditText title={'Address'} value={address} onChangeText={(text) => this.onChangeValueText('address', text)} />
        <EditText title={'Phone'} value={phone} onChangeText={(text) => this.onChangeValueText('phone', text)} />
        <EditText title={'Email'} value={email} />
      </View>
    )
  }

  get renderInteresting() {
    const _this = this
    const interestTitleProps = {
      style: styles.interestTitle,
      text: 'I’m interested in'
    },
    interestedProps = {
      style: styles.interestView
    }
    let interests = this.getInterestFields()
    return (
      <View>
        <EText {...interestTitleProps} />
        <View {...interestedProps}>
          {_.map(interests, (item, key) => {
            let checkboxProps = {
              text: item.name,
              isChecked: item.isChoose,
              onPress: () => {_this.setInterests(item)}
            },
            viewCheckBoxProps = {
              key: item.value,
              style: styles.viewCheckBox,
            }
            return (
              <View {...viewCheckBoxProps}>
                <ECheckbox {...checkboxProps}/>
              </View>
            )
          })}
        </View>
      </View>
    )
  }

  render() {
    const {avatarImage} = this.state
    const {currentBalancePoints, vouchers, offers} = this.props.user
    const avatarProps = {
      style: styles.avatar,
      uri: isEmpty(avatarImage) ? AVATAR_DEFAULT : avatarImage ,
      onImageChange: (url) => this.onChangeValueText('avatarImage', url)
    },
    points = [
      {name: 'Rewards Points', value: currency(currentBalancePoints) || 0},
      {name: 'Vouchers', value: vouchers},
      {name: 'Offers', value: offers}
    ]
    submitProps = {
			text: getStrings().submit,
			style: styles.submit,
			onPress: this.onSubmit.bind(this),
			type: TextButtonTypes.black,
			textStyle: styles.textSubmit,
    }
    return (
      <BaseScreen>
        <View style={styles.view}>
          {this.renderBackButton}
          <EImageChange {...avatarProps} />
        </View>
        <View style={styles.scrollView}>
          <ScrollView>
            {this.renderProfile}
            {this.renderInteresting}
            <EListPointsView data={points} />
            <EButton {...submitProps} />
          </ScrollView>
        </View>
      </BaseScreen>
    )
  }
}

class EditText extends Component {
  render() {
    const {title, value, onChangeText} = this.props
    const editViewProps = {
      style: styles.editView
    },
    titleProps = {
      text: title,
      style: styles.editTitle
    },
    inputProps = {
      style: styles.inputView
    },
    textProps = {
      value: value,
      textInputStyle: styles.editValue,
      onChangeText
    },
    iconProps = {
      source: editIcon,
      style: styles.editIconView
    }
    return (
      <View {...editViewProps} >
        <EText {...titleProps} />
        <View {...inputProps}>
          {title === 'Email' ? <EText text={value} style={{color: '#828282'}}/> : <ETextInput {...textProps} />}
          {onChangeText && <EImage {...iconProps} />}
        </View>
      </View>
    )
  }
}
