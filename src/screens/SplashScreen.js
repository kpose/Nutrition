import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet, 
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import * as Animatable from "react-native-animatable";
import LottieView from 'lottie-react-native';


const cookingAnimation = require('../../assets/chef.json')

const SplashScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Animatable.View
          animation="bounceIn"
          duraton="1500"
          
          style={styles.logo}
          resizeMode="stretch"
        >
        <LottieView
        source={cookingAnimation}
        autoPlay
        
        resizeMode="cover"
      />
      </Animatable.View>

        
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Text style={styles.title}>BOUNDLESS!</Text>
        <Text style={styles.text}>MULTI-SERVCES SOLUTIONS NIGETIA LTD</Text>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate("SignInScreen")}>
            <LinearGradient
              colors={["#b83d0f", "#fa638c"]}
              style={styles.signIn}
            >
              <Text style={styles.textSign}>Get Started</Text>
              <MaterialIcons name="navigate-next" color="#fff" size={20} />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default SplashScreen;

const { height, width } = Dimensions.get("screen");
const height_logo = height / 2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b83d0f",
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  title: {
    color: "#05375a",
    fontSize: 30,
    fontWeight: "bold",
  },
  text: {
    color: "grey",
    marginTop: 5,
  },
  button: {
    alignItems: "flex-end",
    marginTop: 30,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    flexDirection: "row",
  },
  textSign: {
    color: "white",
    fontWeight: "bold",
  },
});
