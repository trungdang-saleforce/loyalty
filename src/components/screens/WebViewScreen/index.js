/*
*
@author tri.tran on 1/29/19
*
*/

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import WebViewComponent from "./component";
import { actions } from '../../../redux/actions';

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    //map dispatch to component props
    return {...{dispatch: dispatch}, ...bindActionCreators(actions, dispatch)};
}

class WebViewScreen extends Component {
    render() {
        return (
            <WebViewComponent {...this.props}/>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WebViewScreen)