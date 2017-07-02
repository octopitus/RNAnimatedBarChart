/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import ChartContainer from './src/ChartContainer'

export default class RNBarChart extends Component {
  render() {
    return <ChartContainer />;
  }
}

AppRegistry.registerComponent('RNBarChart', () => RNBarChart);
