import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const SignUpScreen = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("DrawerNavigator")}>
        <Text>sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpScreen;
