import React from "react";
import { StyleSheet } from "react-native";
import "react-native-gesture-handler";
import Providers from "./src/navigation/index";
import store from "./src/redux/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <Providers />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
