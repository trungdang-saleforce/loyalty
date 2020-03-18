/*
*
@author tri.tran on 1/29/19
*
*/
import React, { Component } from "react";
import { View } from "react-native";
import styles from "./style";
import { actions } from "../../../redux/actions";
import { getStore } from "../../../../App";
import EImage from "../../elements/EImage";

export default class SplashComponent extends Component {
  componentDidMount() {
    getStore().dispatch(actions.getAutoLogin())
  }

  render() {
    const {logo} = this.props
    const logoProps = {
      source: require('../../../../res/coffee/bg-screen.png'),
      style: styles.logo,
      resizeMode: 'contain'
    }
    return (
      <View style={styles.container}>
        <EImage {...logoProps}/>
      </View>
    );
  }
}
