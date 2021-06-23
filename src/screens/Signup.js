import React from "react";
import axios from "axios";

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";

import { ToastAndroid, Platform, AlertIOS } from "react-native";

const Signup = (props) => {
  // State For Signup Data.
  const [signup, setsignup] = React.useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmpassword: "",
  });

  // Handler to Set The Login Account Data To Local Storage.
  const handleSubmit = () => {
    console.log(signup);
    if (signup.password === signup.confirmpassword && signup.password !== "") {
      axios
        .post("http://567f9c8740df.ngrok.io/users/", {
          name: signup.name,
          phone: signup.phone,
          email: signup.email,
          joined: Date.now(),
          password: signup.password,
          status: "Normal",
        })
        .then(
          (response) => {
            console.log(response);
          },
          (error) => {
            console.log(error);
          }
        );
      notifier("Signup Success! Please Login to Continue.");
      props.navigation.navigate("login");
    } else {
      notifier("Oops! Something Went Wrong Please Try Again.");
    }
  };

  const notifier = (msg) => {
    if (Platform.OS === "android") {
      ToastAndroid.show(msg, ToastAndroid.SHORT);
    } else {
      AlertIOS.alert(msg);
    }
  };

  return (
    <View style={styles.defview}>
      <Text style={styles.texts}>Create An Account With Us!</Text>
      <TextInput
        style={styles.input}
        // value={signup.name}
        placeholder="Please Enter Your Name"
        onChangeText={(v) => setsignup({ name: v })}
      />
      <TextInput
        style={styles.input}
        // value={signup.phone}
        placeholder="Please Enter Your Phone Number"
        type="number"
        keyboardType="numeric"
        onChangeText={(v) => setsignup({ phone: v })}
      />
      <TextInput
        style={styles.input}
        // value={signup.email}
        placeholder="Please Enter Your Email."
        type="email"
        onChangeText={(v) => setsignup({ email: v })}
      />
      <TextInput
        style={styles.input}
        // value={signup.password}
        placeholder="Please Enter Your Password."
        secureTextEntry={true}
        type="password"
        onChangeText={(v) => setsignup({ password: v })}
      />
      <TextInput
        style={styles.input}
        // value={signup.confirmpassword}
        placeholder="Please Enter Your Password Again."
        secureTextEntry={true}
        type="password"
        onChangeText={(v) => setsignup({ confirmpassword: v })}
      />

      <TouchableOpacity onPress={handleSubmit} style={[styles.touch]}>
        <Text style={styles.SignUptext}>SignUp</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  SignUptext: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
  texts: {
    marginBottom: 40,
    fontSize: 20,
    color: "white",
    borderWidth: 2,
  },
  touch: {
    marginLeft: 100,
    justifyContent: "center",
    width: 100,
    height: 50,
    borderWidth: 2,
    borderColor: "grey",
    borderRadius: 10,
    backgroundColor: "grey",
  },
  input: {
    borderWidth: 2,
    borderColor: "grey",
    borderRadius: 10,
    backgroundColor: "grey",
    padding: 10,
    margin: 20,
  },
  defview: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "black",
    margin: 0,
    padding: 50,
    alignContent: "center",
    justifyContent: "center",
  },
});

export default Signup;
