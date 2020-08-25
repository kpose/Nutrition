import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation/RootNavigator'
import 'react-native-gesture-handler';
import Providers from './src/navigation/index'

import {AuthNavigator} from './src/navigation/RootNavigator'
import {DrawerNavigator} from './src/navigation/RootNavigator'

import store from './src/redux/store'

import { Provider } from 'react-redux'



export default function App() {

  return (
    <Provider store = {store}>
      <Providers />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
