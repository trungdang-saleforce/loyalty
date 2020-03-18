/*
*
@author tri.tran on 2/15/19
*
*/

import { StyleSheet } from 'react-native'
import { appStyleConstants } from '../../../commons/Constants';

export default StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		height: appStyleConstants.UI_ITEM_HEIGHT,
		borderRadius: appStyleConstants.UI_BORDER_RADIUS,
		backgroundColor: 'white',
		borderWidth: 1,
		borderColor: 'white',
		alignSelf: 'stretch'

	},
	input: {
		alignSelf: 'stretch',
		justifyContent: 'center',
		alignItems: 'center',
		height: appStyleConstants.UI_ITEM_HEIGHT,
		marginHorizontal: appStyleConstants.LARGE_SCREEN_MARGIN,
		fontSize: appStyleConstants.mediumFont,
	},
	validate: {
		borderColor: '#D93A53'
	},
	border: {
		borderColor: 'rgba(215, 215, 215, 1)'
	},
	clearButtonContainer: {
		position: 'absolute',
		top: 0,
		right: 0,
		bottom: 0,
		width: 18 + appStyleConstants.LARGE_SCREEN_MARGIN * 2,
		justifyContent: 'center',
		alignItems: 'center'
	}
})
