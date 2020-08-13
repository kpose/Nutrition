import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Platform,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

//import react navigation
import { createAppContainer } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import {DrawerContent } from './DrawerContent'
//import screens
import Categories from '../screens/Categories';
import Search from '../screens/Search';
import Nutrition from '../screens/Nutrition';
import NutritionDetails from '../screens/NutritionDetails';
import Home from '../screens/Home';
import Ingredients from '../screens/Ingredients';
import IngredientDetails from '../screens/IngredientDetails';
import RecipeDetailsScreen from '../screens/RecipeDetailsScreen';
import SplashScreen from '../screens/SplashScreen';
import SignUpScreen from '../screens/SignUpScreen';
import SignInScreen from '../screens/SignInScreen';


const HomeStack = createStackNavigator();
const NutritionStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const WelcomeStackScreen = createStackNavigator();


const HomeStackScreen = ({navigation}) => {
  return (
    <HomeStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#009387',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      },
    
      
    }}>
      <HomeStack.Screen name="Home" component={Home} options ={{
        headerLeft: () => (
          <Icon.Button name='ios-menu' size ={25}
            backgroundColor= "#009387" onPress = {() => {
              navigation.openDrawer()
            }}></Icon.Button>
        ),
        headerRight: () => (
          <Icon.Button name='ios-menu' size ={25}
            backgroundColor= "#009387" onPress = {() => {
              navigation.openDrawer()
            }}></Icon.Button>
        )
      }} />
      <HomeStack.Screen name="Ingredients" component={Ingredients} />
      <HomeStack.Screen name="IngredientDetails" component={IngredientDetails} />
      <HomeStack.Screen name="RecipeDetailsScreen" component={RecipeDetailsScreen} />
  </HomeStack.Navigator>
  );
}


const RootNavigator = ({navigation}) => {
  return (
    <WelcomeStackScreen.Navigator screenOptions={{
      headerShown: false
    
      
    }} >
      <WelcomeStackScreen.Screen name="SplashScreen" component={SplashScreen} />
      <WelcomeStackScreen.Screen name="SignInScreen" component={SignInScreen} />
      <WelcomeStackScreen.Screen name="SignUpScreen" component={SignUpScreen} />
      <WelcomeStackScreen.Screen name="DrawerNavigator" component={DrawerNavigator} />
  </WelcomeStackScreen.Navigator>
  );
}


const NutritionStackScreen = ({navigation}) => {
  return (
    <NutritionStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#009387',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      },
    
      
    }}>
      <NutritionStack.Screen name="Nutrition" component={Nutrition} options ={{
        headerLeft: () => (
          <Icon.Button name='ios-menu' size ={25}
            backgroundColor= "#009387" onPress = {() => {
              navigation.openDrawer()
            }}></Icon.Button>
        )
      }} />
      <NutritionStack.Screen name="NutritionDetails" component={NutritionDetails} />
  </NutritionStack.Navigator>
  );
}

//make categories and search stacks

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent = {props => <DrawerContent {...props} />}>
        <Drawer.Screen name="HomeStackScreen" component={HomeStackScreen} options = {{
          title: "Home"
        }} />
        <Drawer.Screen name="Nutrition" component={NutritionStackScreen} />
        <Drawer.Screen name="Categories" component={Categories} />
        <Drawer.Screen name="Search" component={Search} />
    </Drawer.Navigator>
  );
}



export default RootNavigator;
