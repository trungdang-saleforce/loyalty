/*
*
@author tri.tran on 2/19/19
*
*/

import React, {Component} from 'react'
import {View} from 'react-native'
import { NavigationActions } from 'react-navigation';
import BaseScreen from '../../BaseScreen';
import styles from './style';
import { getStrings } from '../../../commons/Strings';
import EButton, { TextButtonTypes } from '../../elements/EButton';
import ETextInput from '../../elements/ETextInput';
import EText from '../../elements/EText';
import ECheckbox from '../../elements/ECheckbox';
import _ from 'lodash';
import { getStore } from '../../../../App';
import { appScreenName } from '../../../commons/Constants';

const INTERESTED = [
  {title: 'Special Offers', value: '1', isChoose: true},
  {title: 'Food', value: '2', isChoose: false},
  {title: 'Drinks', value: '3', isChoose: false},
  {title: 'Phone Cards', value: '4', isChoose: false},
]

export default class AboutMeComponent extends Component {
  
  state = {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    interests: INTERESTED,
    isChecked: false,
  }

  onSubmit = () => {
    getStore().dispatch(NavigationActions.navigate({routeName: appScreenName.home}))
  }

  setInterests = (itemInterest) => {
    const {interests} = this.state
    let nextInterests = _.map(interests, (item, key) => {
      return item.value === itemInterest.value ? itemInterest : item
    })
    this.setState({
      interests: nextInterests
    })
  }

  get renderInterested() {
    const {interests} = this.state
    const _this = this
    return _.map(interests, (item, key) => {
      let checkboxProps = {
        text: item.title,
        isChecked: item.isChoose,
        onPress: () => {
          item.isChoose = !item.isChoose
          _this.setInterests(item)
        }
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
    })
  }
  
  render() {
    let baseContainerProps = {
			style: styles.baseContainer,
    },
    titleInfoProps = {
      style: styles.title,
      text: getStrings().aboutMe
    },
		aboutFormProps = {
			style: styles.aboutForm
		},
		fitstNameProps = {
			style: styles.textInput,
			placeholder: getStrings().firstName,
			onChangeText: (text) => {
				this.setState({
					firstName: text
				})
			},
			autoCapitalize: 'none',
		},
		lastNameProps = {
			style: styles.textInput,
			placeholder: getStrings().lastName,
			onChangeText: (text) => {
				this.setState({
					lastName: text
				})
			},
			autoCapitalize: 'none',
    },
    dateOfBirthProps = {
			style: styles.textInput,
			placeholder: getStrings().dateOfBirth,
			onChangeText: (text) => {
				this.setState({
					dateOfBirth: text
				})
			},
			autoCapitalize: 'none',
    },
    titleInterestProps = {
      style: styles.title,
      text: getStrings().interest
    },
		submitProps = {
			text: getStrings().submit,
			style: styles.submit,
			onPress: this.onSubmit.bind(this),
			type: TextButtonTypes.black,
			textStyle: styles.textSubmit,
    }
    
		return (
			<BaseScreen {...baseContainerProps}>
        <EText {...titleInfoProps} />
				<View {...aboutFormProps}>
					<ETextInput {...fitstNameProps} />
					<ETextInput {...lastNameProps} />
          <ETextInput {...dateOfBirthProps} />
				</View>
        <EText {...titleInterestProps} />
        <View {...aboutFormProps}>
          {this.renderInterested}
          <EButton {...submitProps} />
        </View>
			</BaseScreen>
		)
  }
}
