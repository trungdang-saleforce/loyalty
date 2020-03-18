/*
*
@author tri.tran on 2/15/19
*
*/

import React, { Component } from 'react'
import {View} from 'react-native';
import ETextInput from '../ETextInput';
import EText from '../EText';
import EImage from '../EImage';
import styles from './style';

export default class EMixedText extends Component {
	
	get renderText() {
		const {isEdit, text} = this.props,
		inputProps = {
			...this.props,
			style: styles.text
		}
		return isEdit ? <ETextInput {...inputProps} /> 
									: <EText {...this.props} />
	}

	render() {
		return (
			<View style={styles.view}>
				{this.renderText}
				<EImage style={styles.icon} source={require('../../../../res/edit-icon.png')} />
			</View>
		)
	}

}
