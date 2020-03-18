/*
*
@author tri.tran on 2/18/19
*
*/

import React, {Component} from 'react'
import {ActivityIndicator, View} from 'react-native'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types'
import styles from './style'
import EDialog from '../EDialog';
import { actions } from '../../../redux/actions';

const mapStateToProps = (state) => {
    const {apps, users, products, search, rewards, stores} = state
    let isFetching = apps.isFetching || users.isFetching || products.isFetching || specialOffers.isFetching
                    || search.isFetching || rewards.isFetching || stores.isFetching
    return {
        isShowWaitingDialog: isFetching
    }
}

const mapDispatchToProps = (dispatch) => {
    //map dispatch to component props
    return {...{dispatch: dispatch}, ...bindActionCreators(actions, dispatch)};
}

class EWaitLoading extends Component {
    render() {
        return (
            <EWaitLoadingComponent {...this.props}/>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EWaitLoading)

class EWaitLoadingComponent extends Component {

    render() {
        let dialogProps = {
                show: this.props.isShowWaitingDialog
            },
            waitingViewProps = {
                style: styles.loading
            },
            activityIndicatorProps = {
                animating: this.props.isShowWaitingDialog,
                size: 'large'
            }
        return (
            <EDialog {...dialogProps}>
                <View {...waitingViewProps}>
                    <ActivityIndicator  {...activityIndicatorProps}/>
                </View>
            </EDialog>
        )
    }

}

EWaitLoadingComponent.defaultProps = {
    isShowWaitingDialog: false
}

EWaitLoadingComponent.propTypes = {
    isShowWaitingDialog: PropTypes.bool,
}
