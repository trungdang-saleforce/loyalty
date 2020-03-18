/*
*
@author tri.tran on 2/18/19
*
*/

import React, {Component} from 'react'
import { View} from 'react-native'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types'
import styles from './style'
import { actions } from '../../../redux/actions';
import EText from '../EText';
import { closeMessage } from '../../../commons/Utils';

const mapStateToProps = (state) => {
    return {
        title: state.modals.title,
        message: state.modals.message,
        hasShow: state.modals.hasShow,
    }
}

const mapDispatchToProps = (dispatch) => {
    //map dispatch to component props
    return {...{dispatch: dispatch}, ...bindActionCreators(actions, dispatch)};
}

class EShowMessage extends Component {
    render() {
        return (
            <EShowMessageComponent {...this.props}/>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EShowMessage);

class EShowMessageComponent extends Component {

  componentDidUpdate() {
    if(this.props.hasShow) {
      setTimeout(() => {
        closeMessage();
      }, 2000);
    }
  }

  render() {
    const {title, message, hasShow} = this.props,
    titleProps = {
      text: title,
      style: styles.title
    },
    messageProps = {
      text: message,
      style: styles.message
    }
    return hasShow ? (
      <View style={styles.view}>
        <EText {...titleProps} />
        <EText {...messageProps} />
      </View>
    ) : null
  }

}

EShowMessageComponent.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  hasShow: PropTypes.bool.isRequired,
}

EShowMessageComponent.defaultProps = {
  title: '',
  message: '',
  hasShow: false,
}