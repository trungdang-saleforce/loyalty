/*
*
@author tri.tran on 2/15/19
*
*/

import React, { Component } from 'react'
import { TextInput, View, ViewPropTypes, Keyboard } from 'react-native'
import PropTypes from 'prop-types'
import styles from './style'
import { appStyleConstants } from "../../../commons/Constants";

export default class ETextInput extends Component {
	constructor(props) {
		super(props)
		this.state = {
			validate: false
		}
	}

	clear = () => {
		this.input.clear()
	}

	focus = () => {
		this.input.focus()
	}

	showValidate = () => {
		this.setState({
			validate: true
		})
	}

	hideValidate = () => {
		this.setState({
			validate: false
		})
	}

	onFocus = (event) => {
		this.hideValidate()
		if (this.props.onFocus)
			this.props.onFocus(event)
	}

	render() {
		let isShowClearButton = this.props.clearButtonMode && this.props.numberOfLines === 1 && this.props.value && this.props.value.length > 0
		let viewProps = {
			style: [styles.container,
			this.state.validate ?
				styles.validate
				:
				this.props.hasBorder
					?
					styles.border
					:
					null,
			{
				backgroundColor: this.props.editable ? 'white' : appStyleConstants.BORDER_COLOR_GRAY, height: this.props.height
			},
			this.props.style]
		},
			inputProps = {
				ref: (c) => this.input = c,
				style: [styles.input,
				{
					paddingRight: isShowClearButton ? (appStyleConstants.LARGE_SCREEN_MARGIN * 2 + 18) : 0,
					height: this.props.height
				},
				this.props.textInputStyle],
				autoCapitalize: this.props.autoCapitalize,
				multiline: this.props.multiline,
				numberOfLines: this.props.numberOfLines,
				autoCorrect: this.props.autoCorrect,
				keyboardType: this.props.keyboardType,
				selectTextOnFocus: this.props.selectTextOnFocus,
				onChangeText: this.props.onChangeText,
				onSelectionChange: this.props.onSelectionChange,
				placeholder: this.props.placeholder,
				placeholderTextColor: this.props.placeholderTextColor,
				secureTextEntry: this.props.secureTextEntry,
				value: this.props.value,
				editable: this.props.editable,
				returnKeyType: this.props.returnKeyType,
				onSubmitEditing: this.props.onSubmitEditing,
				onBlur: this.props.onBlur,
				onFocus: (event) => {
					this.onFocus(event)
				}
			},
			touchFeedback = {
				onPress: () => Keyboard.dismiss()
			}
		return (
			<View {...viewProps}>
					<TextInput {...inputProps} />
				</View>
		)
	}
}

ETextInput.propTypes = {
	keyboardType: PropTypes.string,
	onChangeText: PropTypes.func,
	onFocus: PropTypes.func,
	placeholder: PropTypes.string,
	placeholderTextColor: PropTypes.string,
	secureTextEntry: PropTypes.bool,
	style: ViewPropTypes.style,
	multiline: PropTypes.bool,
	autoCapitalize: PropTypes.string,
	autoCorrect: PropTypes.bool,
	hasBorder: PropTypes.bool,
	value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	editable: PropTypes.bool,
	height: PropTypes.number,
	textInputStyle: TextInput.propTypes.style,
}

ETextInput.defaultProps = {
	keyboardType: 'default',
	onChangeText: () => {
	},
	onFocus: () => {
	},
	onSelectionChange: () => {
	},
	placeholder: 'Enter Text',
	secureTextEntry: false,
	multiline: false,
	autoCapitalize: "sentences",
	autoCorrect: true,
	hasBorder: false,
	value: null,
	editable: true,
	textInputStyle: null,
	height: appStyleConstants.UI_ITEM_HEIGHT,
}
