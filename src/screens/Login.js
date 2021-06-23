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

const Login = (props) => {
  // State For Login.
  const [Login, setLogin] = React.useState({
    email: "",
    password: "",
  });

  let userdata, admindata;
  // Handler For Retreiving Data And Login.
  const handleLogin = () => {
    console.log(Login);
    axios
      .all([
        axios.get("http://567f9c8740df.ngrok.io/users"),
        axios.get("http://567f9c8740df.ngrok.io/admin"),
      ])
      .then(async (res) => {
        userdata = await res[0].data;
        admindata = await res[1].data;
        verification();
      })
      .catch((err) => console.log(err));
  };

  const verification = async () => {
    for (let i = 0; i < userdata.length; i++) {
      for (let j = 0; j < admindata.length; j++) {
        if (
          Login.email === userdata[i].email &&
          Login.password === userdata[i].password &&
          Login.email !== admindata[j].email &&
          Login.password !== admindata[j].password &&
          userdata[i].status !== "Blacklisted"
        ) {
          notifier("Login Successful.");
          break;
        } else if (
          Login.email !== userdata[i].email &&
          Login.password !== userdata[i].password &&
          Login.email === admindata[j].email &&
          Login.password === admindata[j].password
        ) {
          notifier("Admin LoggedIn.");
          break;
        }
      }
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
      <Text style={styles.texts}>Login To Your FbWatch Account</Text>
      <TextInput
        style={styles.input}
        placeholder="Please Enter Your Email."
        type="email"
        value={Login.email}
        onChangeText={(e) => setLogin({ email: e })}
      />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Please Enter Your Password."
        type="password"
        value={Login.password}
        onChangeText={(e) => setLogin({ password: e })}
      />
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("reset");
        }}
      >
        <Text style={[styles.texts, { fontSize: 10, textAlign: "right" }]}>
          Forgot Password ?
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleLogin}
        style={[styles.touch, { marginBottom: 10 }]}
      >
        <Text style={styles.logintext}>LOGIN</Text>
      </TouchableOpacity>

      <Text style={styles.texts}>Dont Have an Account? SignUp Now.</Text>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("signup");
        }}
        style={[styles.touch]}
      >
        <Text style={styles.logintext}>SIGNUP</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  logintext: {
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

export default Login;
