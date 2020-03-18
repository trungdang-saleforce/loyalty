/*
*
@author tri.tran on 1/29/19
*
*/

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import RewardHistoryComponent from './component';
import { actions } from '../../../redux/actions';

const mapStateToProps = (state) => {
    return {
        //map state from store to component props
        histories: state.rewards.histories,
        user: state.users.user,
    }
}

const mapDispatchToProps = (dispatch) => {
    //map dispatch to component props
    return {...{dispatch: dispatch}, ...bindActionCreators(actions, dispatch)};
}

class RewardHistoryScreen extends Component {
    render() {
        return (
            <RewardHistoryComponent {...this.props}/>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RewardHistoryScreen)