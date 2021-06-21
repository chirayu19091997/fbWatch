import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Home = (props) => {
  return (
    <View>
      <View style={styles.buttonContainer}>
        <Text style={styles.text}>Hello, Welcome To fbWatch</Text>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("content");
          }}
          style={styles.appButtonContainer}
        >
          <Text style={styles.appButtonText}>Dive In!</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("login");
          }}
          style={[styles.appButtonContainer, { marginTop: 20 }]}
        >
          <Text style={styles.appButtonText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("signup");
          }}
          style={[styles.appButtonContainer, { marginTop: 20 }]}
        >
          <Text style={styles.appButtonText}>SIGNUP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "dodgerblue",
    borderRadius: 40,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 400,
    margin: 20,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  text: {
    fontSize: 25,
  },
  buttonContainer: {
    width: "100%",
    borderColor: "dimgray",
    justifyContent: "center",
    alignItems: "center",

    marginTop: "30%",
  },
});

export default Home;
