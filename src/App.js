

import React, {Component} from 'react';
import { Root } from "native-base";
import {Platform, StyleSheet, Text, View} from 'react-native';
import Login from "./Components/login/login";

export default class App extends React.Component {
  render() {
    return (
      <Root>
        <Login />
      </Root>
    );
  }
}
