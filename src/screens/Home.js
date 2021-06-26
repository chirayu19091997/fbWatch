import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  SafeAreaView,
} from "react-native";

const Home = (props) => {
  const { height, width } = Dimensions.get("window");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          justifyContent: "flex-end",
        }}
      >
        <View
          style={{
            flex: 1,
            position: "absolute",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../assets/bg.jpg")}
            style={{ flex: 1, height: height, width: width }}
          />
        </View>
        <Text
          style={{
            fontSize: 35,
            fontWeight: "bold",
            textAlign: "center",
            color: "black",
            marginBottom: 70,
          }}
        >
          Welcome To fbWatch
        </Text>
        <View style={{ height: height / 2, justifyContent: "center" }}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("content");
            }}
          >
            <View style={styles.button}>
              <Text style={{ fontSize: 24, fontWeight: "bold" }}>DIVE IN</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("login");
            }}
          >
            <View style={styles.button}>
              <Text style={{ fontSize: 24, fontWeight: "bold" }}>LOG IN</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("signup");
            }}
          >
            <View style={styles.button}>
              <Text style={{ fontSize: 24, fontWeight: "bold" }}>SIGN UP</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    height: 70,
    borderRadius: 35,
    marginHorizontal: 30,
    backgroundColor: "white",
    marginVertical: 10,
  },
});
