/*
*
@author tri.tran on 1/29/19
*
*/

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import RewardVoucherComponent from './component';
import { actions } from '../../../redux/actions';

const mapStateToProps = (state) => {
    return {
        //map state from store to component props
        vouchers: state.rewards.vouchers,
        user: state.users.user,
    }
}

const mapDispatchToProps = (dispatch) => {
    //map dispatch to component props
    return {...{dispatch: dispatch}, ...bindActionCreators(actions, dispatch)};
}

class RewardVoucherScreen extends Component {
    render() {
        return (
            <RewardVoucherComponent {...this.props}/>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RewardVoucherScreen)