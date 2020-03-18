/*
*
@author tri.tran on 1/29/19
*
*/

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import LoginComponent from './component';
import { actions } from '../../../redux/actions';

const mapStateToProps = (state) => {
    return {
        //map state from store to component props
        token: state.users.token,
        isResetSuccess: state.users.isResetSuccess || false
    }
}

const mapDispatchToProps = (dispatch) => {
    //map dispatch to component props
    return {...{dispatch: dispatch}, ...bindActionCreators(actions, dispatch)};
}

class LoginScreen extends Component {
    render() {
        return (
            <LoginComponent {...this.props}/>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)