import React from 'react'
//import {Block, Text } from "expo-ui-kit"
import { StyleSheet, Text, View, Button } from 'react-native';

const NutritionDetails= ({ style }) => {
  return (
    <View style={styles.container}>
      <Text >Nutrition...</Text>
    </View>
  )
}

export default NutritionDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
