/*
*
@author thien on 6/12/18
*
*/

import React, { Component } from "react";
import { View } from "react-native";
import {WebView} from 'react-native-webview';
import { HEADER_TYPE } from "../../../commons/Constants";
import styles from "./style";
import EText from "../../elements/EText";
import { goBack } from "../../../commons/Utils";
import _ from 'lodash';
import BaseScreen from "../../BaseScreen";

export default class WebviewComponent extends Component {
  state = {
    title: "Web View"
  };

  handleMessage = message => {
    this.setState({ title: message.nativeEvent.data });
  };

  get getErrorPage() {
    const contentProps = {
      style: styles.errorContainer
    }
    errorCodeProps = {
      style: styles.errorCode,
      text: '404'
    },
    notFoundProps = {
      style: styles.errorText,
      text: 'This page could be not found'
    }
    return (
      <View {...contentProps}>
        <EText {...errorCodeProps}/>
        <EText {...notFoundProps} />
      </View>
    );
  }

  render() {
    let url = this.props.navigation.state.params;
    if (!_.includes(url, "http://") && !_.includes(url, "https://")) {
      url = "http://" + url;
    }
    const containerProps = {
      typeHeader: HEADER_TYPE.TITLE,
      title: "Web View",
      style: styles.baseView,
      titleStyle: styles.titleBase,
      showBack: true,
      onBackPress: () => {
        goBack();
      }
    };

    return (
      <BaseScreen {...containerProps}>
        <WebView
          startInLoadingState={true}
          source={{ uri: url }}
          onMessage={this.handleMessage}
          renderError={() => {
            return this.getErrorPage;
          }}
        />
      </BaseScreen>
    );
  }
}
