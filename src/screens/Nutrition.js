import React from 'react'
//import {Block, Text } from "expo-ui-kit"
import { StyleSheet, Text, View, Button } from 'react-native';

const Nutrition = ({ style }) => {
  return (
    <View style={styles.container}>
      <Text >Nutrition...</Text>
    </View>
  )
}

export default Nutrition;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
