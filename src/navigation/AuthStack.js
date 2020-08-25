
import React, { Component } from 'react';

//import react navigation
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../screens/SplashScreen';
import SignUpScreen from '../screens/SignUpScreen';
import SignInScreen from '../screens/SignInScreen';



const Stack = createStackNavigator();


const AuthStack = ({navigation}) => {
    return (
      <Stack.Navigator screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      
        
      }} >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        {/* <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} /> */}
    </Stack.Navigator>
    );
  }

  export default AuthStack;