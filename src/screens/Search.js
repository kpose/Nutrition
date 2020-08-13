import React from 'react'
//import {Block, Text } from "expo-ui-kit"
import { StyleSheet, Text, View, Button } from 'react-native';

const Search = ({ style }) => {
  return (
    <View style={styles.container}>
      <Text >Search...</Text>
    </View>
  )
}

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
