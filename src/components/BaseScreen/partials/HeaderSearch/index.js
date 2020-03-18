/*
*
@author tri.tran on 2/19/19
*
*/

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import { actions } from '../../../../redux/actions';
import HeaderSearchComponent from './component';

function mapStateToProps(state) {
  return {
    //map state from store to component props
    searchKey: state.search.searchKey
  }
}

function mapDispatchToProps(dispatch) {
  //map dispatch to component props
  return Object.assign({dispatch: dispatch}, bindActionCreators(actions, dispatch))
}

class HeaderSearch extends Component {
  render() {
    return (
      <HeaderSearchComponent {...this.props}/>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderSearch)


