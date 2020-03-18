/*
*
@author tri.tran on 2/19/19
*
*/

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import HomeComponent from "./component";
import { actions } from '../../../redux/actions';

function mapStateToProps(state) {
  return {
    //map state from store to component props
    navTab: state.apps.homeTabs,

  }
}

function mapDispatchToProps(dispatch) {
  //map dispatch to component props
  return Object.assign({dispatch: dispatch}, bindActionCreators(actions, dispatch))
}

class HomeScreen extends Component {
  render() {
    return (
      <HomeComponent {...this.props}/>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
