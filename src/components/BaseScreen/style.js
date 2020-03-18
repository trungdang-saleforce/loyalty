/*
*
@author tri.tran on 2/15/19
*
*/
import { StyleSheet, Platform } from 'react-native'
import { appStyleConstants } from "../../commons/Constants";

const headerHeight = 60
export default StyleSheet.create({
	container: {
		flex: 1
	},
	headerView: {
		height: headerHeight + (Platform.OS === 'ios' ? 25 : 0),
		backgroundColor: '#FFFFFF',
		justifyContent: 'flex-end'
	},
	headerContents: {
		height: headerHeight,
		alignSelf: 'stretch',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderColor: 'rgba(207, 207, 207, 0.5)',
	},
	headerLeft: {
		width: 60,
		height: 60,
		justifyContent: 'center',
		alignItems: 'center'
	},
	headerRight: {
		width: 60,
		height: 60,
		justifyContent: 'center',
		alignItems: 'center'
	},
	appIcon: {
		height: 40
	},
	notification: {
		width: 11,
		height: 17,
		marginRight: appStyleConstants.LARGE_SCREEN_MARGIN
	},
	backIcon: {
		height: 24
	},
	rightIcon: {
		width: 24,
		height: 24
	},
	rightTitle: {
		color: 'black',
		textAlign: 'right'
	},
	leftTitle: {
		color: 'black',
		textAlign: 'left'
	},
	mixHeaderStyle: {
		flex: 1,
		flexDirection: 'column',
		alignSelf: 'center',
		justifyContent: 'center',
		alignItems: 'center',
	},
	mixHeaderTitle: {
		color: '#000000',
		fontWeight: 'normal',
		fontSize: 16,
		textTransform: 'uppercase'
	}
})
