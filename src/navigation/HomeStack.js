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


const RecipeStack = createStackNavigator();
const NutritionStack = createStackNavigator();
const Drawer = createDrawerNavigator();



const RecipeStackScreen = ({navigation}) => {
    return (
      <RecipeStack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        },
      
        
      }}>
        <RecipeStack.Screen name="Home" component={Home} options ={{
          headerLeft: () => (
            <Icon.Button name='ios-menu' size ={25}
              backgroundColor= "#009387" onPress = {() => {
                navigation.openDrawer()
              }}></Icon.Button>
          ),
          headerRight: () => (
            <Icon.Button name='ios-add' size ={25}
              backgroundColor= "#009387" onPress = {() => {
                navigation.openDrawer()
              }}></Icon.Button>
          )
        }} />
        <RecipeStack.Screen name="Ingredients" component={Ingredients} />
        <RecipeStack.Screen name="IngredientDetails" component={IngredientDetails} />
        <RecipeStack.Screen options={{headerShown: false}} name="RecipeDetailsScreen" component={RecipeDetailsScreen} />
    </RecipeStack.Navigator>
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



const HomeStack = () => {
    return (
      <Drawer.Navigator drawerContent = {props => <DrawerContent {...props} />}>
          <Drawer.Screen name="Recipes" component={RecipeStackScreen} options = {{
            title: "Home"
          }} />
          <Drawer.Screen name="Nutrition" component={NutritionStackScreen} />
          <Drawer.Screen name="Categories" component={Categories} />
          <Drawer.Screen name="Search" component={Search} />
      </Drawer.Navigator>
    );
  }


  export default HomeStack;