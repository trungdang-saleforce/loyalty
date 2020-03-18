/*
*
@author tri.tran on 2/19/19
*
*/

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import AboutMeComponent from "./component";
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

class AboutMeScreen extends Component {
  render() {
    return (
      <AboutMeComponent {...this.props}/>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutMeScreen)
