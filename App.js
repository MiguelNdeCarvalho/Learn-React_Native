/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

const instructions = Platform.select({
  ios: 'Basically you are running my app on ios!',
  android:
    'Basically you are running my app on android!'
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Hello World!
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        <Text style={styles.car}>
          Below you can find my favourite car!
        </Text>
        <Image source={{uri: 'https://global-uploads.webflow.com/5a10aaa4d85f4b0001a53297/5b3a516b52b2dc4e811bbdd5_2016-nissan-gt-r-black-isolated-front-angle-royalty-exotic-cars.png'}}
       style={{width: 400, height: 400}} />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#63666b',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#4286f4',
  },
  instructions: {
    textAlign: 'center',
    color: '#ba2c16',
    marginBottom: 5,
  },
  car: {
    textAlign: 'left',
    color: '#2d2d2d',
  },
});
