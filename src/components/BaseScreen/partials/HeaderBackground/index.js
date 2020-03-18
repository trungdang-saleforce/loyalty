/*
*
@author tri.tran on 2/19/19
*
*/

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import { actions } from '../../../../redux/actions';
import HeaderBackgroundComponent from './component';

function mapStateToProps(state) {
  return {
    //map state from store to component props
    headerImage: state.apps.appCommons.appData.bannerHeaderImage,
  }
}

function mapDispatchToProps(dispatch) {
  //map dispatch to component props
  return Object.assign({dispatch: dispatch}, bindActionCreators(actions, dispatch))
}

class HeaderBackground extends Component {
  render() {
    return (
      <HeaderBackgroundComponent {...this.props}/>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderBackground)


