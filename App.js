import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation/RootNavigator'
import 'react-native-gesture-handler';

import {AuthNavigator} from './src/navigation/RootNavigator'
import {DrawerNavigator} from './src/navigation/RootNavigator'

import store from './src/redux/store'

import { Provider } from 'react-redux'

import {decode, encode} from 'base-64'
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }


export default function App() {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  return (
    <Provider store = {store}>
      <NavigationContainer>
        { user ? (
          <DrawerNavigator/>
        ) : (
          <>
            <AuthNavigator />
          </>
        )}
    </NavigationContainer>
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
