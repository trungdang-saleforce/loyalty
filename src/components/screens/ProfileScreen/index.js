/*
*
@author tri.tran on 1/29/19
*
*/

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import ProfileComponent from './component';
import { actions } from '../../../redux/actions';

const mapStateToProps = (state) => {
    return {
        //map state from store to component props
        user: state.users.user,
        interestedFields: state.apps.appCommons.appData.interestedFields
    }
}

const mapDispatchToProps = (dispatch) => {
    //map dispatch to component props
    return {...{dispatch: dispatch}, ...bindActionCreators(actions, dispatch)};
}

class ProfileScreen extends Component {
    render() {
        return (
            <ProfileComponent {...this.props}/>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)