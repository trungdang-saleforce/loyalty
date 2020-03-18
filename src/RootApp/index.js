/*
*
@author tri.tran on 1/29/19
*
*/

import React, {Component} from 'react'
import { View } from "react-native";
import {connect} from 'react-redux'
import {actions} from "../redux/actions";
import {bindActionCreators} from 'redux';
import RootAppComponent from './component';
import EWaitLoading from '../components/elements/EWaitLoading';
import EShowMessage from '../components/elements/EShowMessage';

const mapStateToProps = (state) => {
    return {
        appScreen: state.apps.appScreens,
    }
}

const mapDispatchToProps = (dispatch) => {
    //map dispatch to component props
    return {...{dispatch: dispatch}, ...bindActionCreators(actions, dispatch)};
}

class RootApp extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <EWaitLoading />
                <RootAppComponent {...this.props}/>
                <EShowMessage />
            </View>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RootApp)