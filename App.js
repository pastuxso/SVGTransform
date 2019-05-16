/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import ImageSVG from './image.svg';
import ImageSVG2 from './image2.svg';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Images Below</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text>svg 1. </Text>
          <ImageSVG width={100} height={50} style={{marginLeft: 10}}/>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text>svg 2. </Text>
          <ImageSVG2 width={100} height={50} style={{marginLeft: 10}}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
