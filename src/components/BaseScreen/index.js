/*
*
@author tri.tran on 2/15/19
*
*/
import React, { Component } from 'react'
import { View, ViewPropTypes } from 'react-native'
import styles from './style'
import PropTypes from 'prop-types'
import { HEADER_TYPE } from '../../commons/Constants';
import HeaderBackground from './partials/HeaderBackground';
import HeaderSearch from './partials/HeaderSearch';
import { goBack } from '../../commons/Utils';
import HeaderTitle from './partials/HeaderTitle';
import _ from 'lodash';

export default class BaseScreen extends Component {

	get renderHeader() {
		const { BACKGROUND_IMAGE, SEARCH, TITLE } = HEADER_TYPE
		const {typeHeader, title, searchText, onSearch} = this.props
		switch(typeHeader) {
			case SEARCH:
				const searchProps = {
					...this.props,
					searchText, 
					onSearch,
					onBack: this.onBack.bind(this)
				}
				return <HeaderSearch {...searchProps} />
			case TITLE:
				const titleProps = {
					...this.props,
					title, 
					onBack: this.onBack
				}
				return <HeaderTitle {...titleProps} />
			case BACKGROUND_IMAGE:
			default:
					return <HeaderBackground {...this.props} />
		}
	}

	onBack() {
		goBack()
		if(_.has(this.props, 'onBack') && _.isUndefined(this.props.onBack)) {
			this.props.onBack()
		}
	}

	render() {
		const {isShowHeader} = this.props
		let containerProps = {
			style: [styles.container, this.props.style]
		}
		return (
			<View {...containerProps}>
				{isShowHeader && this.renderHeader}
				{this.props.children}
			</View>
		)
	}
}

BaseScreen.propTypes = {
	style: ViewPropTypes.style,
	isShowHeader: PropTypes.bool, 
	typeHeader: PropTypes.number, 
	title: PropTypes.string, 
	searchText: PropTypes.string, 
	onSearch: PropTypes.func,
}

BaseScreen.defaultProps = {
	style: null,
	isShowHeader: true,
	typeHeader: HEADER_TYPE.BACKGROUND_IMAGE, 
	title: 'Title Header', 
	searchText: 'Search key...', 
	onSearch: () => {},
}
