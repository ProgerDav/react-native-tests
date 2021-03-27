import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { Button } from "react-native-paper";
import { connect } from "react-redux";
import { decrementCounter, incrementCounter } from "../redux/counter/actions";

function Counter({ counterValue, increment, decrement }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Counter value: {counterValue}</Text>

      <View style={styles.buttonContainer}>
        <Button
          icon="plus"
          mode="contained"
          onPress={increment}
        >
          Increment
        </Button>
        <Button
          icon="minus"
          mode="contained"
          onPress={decrement}
        >
          Decrement
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 120,
    backgroundColor: "#fff",
    alignItems: "center",
  },

  text: {
    fontSize: 28,
    color: "#000",
    // textAlign: 'center',
  },

  buttonContainer: {
    width: "100%",
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

const mapStateToProps = (state) => {
  return {
    counterValue: state.counter.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(incrementCounter()),
    decrement: () => dispatch(decrementCounter()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
