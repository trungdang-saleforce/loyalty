/*
*
@author tri.tran on 1/29/19
*
*/

import React, { Component } from 'react'
import {View, Text} from 'react-native'
import BaseScreen from "../../BaseScreen";
import styles from './style'
import ETextInput from '../../elements/ETextInput';
import { getStrings } from '../../../commons/Strings';
import EButton, { TextButtonTypes } from '../../elements/EButton';
import { getStore } from '../../../../App';
import { actions } from '../../../redux/actions';

const webLink = {
	termConditions: 'https://www.coffeeclub.com.au/vip-club/terms-and-conditions/',
	privacy: 'https://www.coffeeclub.com.au/privacy-policy/',
}

export default class LoginComponent extends Component {
	constructor(props) {
		super(props)
		this.state = {
			email: '',
			password: '',
		}
	}

	componentWillReceiveProps(nextProps) {
		
	}

	onLogin = () => {
		const {email, password} = this.state
		getStore().dispatch(actions.doLogin(email, password))
	}

	openWebLink = (link) => {
		
	}

	get renderDescription() {
		return (
			<Text>
				{getStrings().descriptionLoginForm}
				<Text
					onPress={() => this.openWebLink(webLink.termConditions)}
					style={{color: '#2F80ED', fontWeight: 'bold'}}
				>{getStrings().termConditions}</Text>
				{getStrings().and}
				<Text
					onPress={() => this.openWebLink(webLink.privacy)}
					style={{color: '#2F80ED', fontWeight: 'bold'}}
				>{getStrings().privacy}</Text>
			</Text>
		)
	}

	render() {
		let baseContainerProps = {
			style: styles.baseContainer,
		},
		loginFormProps = {
			style: styles.loginForm
		},
		emailProps = {
			style: styles.emailInput,
			placeholder: getStrings().email,
			onChangeText: (text) => {
				this.setState({
					email: text
				})
			},
			ref: (c) => this.loginEmail = c,
			autoCapitalize: 'none',
		},
		passWordProps = {
			style: styles.passwordInput,
			placeholder: getStrings().passWord,
			onChangeText: (text) => {
				this.setState({
					password: text
				})
			},
			ref: (c) => this.loginPassword = c,
			autoCapitalize: 'none',
			secureTextEntry: true,
		},
		loginButtonProps = {
			text: getStrings().login,
			style: styles.loginButton,
			onPress: this.onLogin.bind(this),
			type: TextButtonTypes.black,
			textStyle: styles.textLoginButton,
		},
		descriptionProps = {
			style: styles.description
		},
		termConProps = {
			text: getStrings().termConditions,
			onPress: () => this.openWebLink(webLink.termConditions)
		},
		privacyProps = {
			text: getStrings().privacy,
			onPress: () => this.openWebLink(webLink.privacy)
		};
		return (
			<BaseScreen {...baseContainerProps}>
				<View {...loginFormProps}>
					<ETextInput {...emailProps} />
					<ETextInput {...passWordProps} />
					<EButton {...loginButtonProps} />
				</View>
				<View {...descriptionProps}>
					{this.renderDescription}
				</View>
			</BaseScreen>
		)
	}
}
