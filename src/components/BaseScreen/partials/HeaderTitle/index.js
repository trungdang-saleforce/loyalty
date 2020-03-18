/*
*
@author tri.tran on 2/19/19
*
*/

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import { actions } from '../../../../redux/actions';
import HeaderTitleComponent from './component';

function mapStateToProps(state) {
  return {
    //map state from store to component props
  }
}

function mapDispatchToProps(dispatch) {
  //map dispatch to component props
  return Object.assign({dispatch: dispatch}, bindActionCreators(actions, dispatch))
}

class HeaderTitle extends Component {
  render() {
    return (
      <HeaderTitleComponent {...this.props}/>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderTitle)


