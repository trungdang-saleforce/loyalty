/*
*
@author tri.tran on 1/29/19
*
*/

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import SearchMainComponent from './component';
import { actions } from '../../../redux/actions';

const mapStateToProps = (state) => {
    return {
        //map state from store to component props
        products: state.products.products,
        searchKey: state.search.searchKey,
    }
}

const mapDispatchToProps = (dispatch) => {
    //map dispatch to component props
    return {...{dispatch: dispatch}, ...bindActionCreators(actions, dispatch)};
}

class SearchMainScreen extends Component {
    render() {
        return (
            <SearchMainComponent {...this.props}/>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchMainScreen)