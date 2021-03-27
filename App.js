import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

// import styles from "./src/styles";

import store from "./src/redux/index";
import { Provider } from "react-redux";
import Counter from "./src/components/Counter";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Counter />
        <StatusBar style="auto" />
      </View>
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
