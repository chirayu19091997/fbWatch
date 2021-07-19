import React from "react";
import axios from "axios";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import * as SecureStore from "expo-secure-store";

import { ToastAndroid, Platform, AlertIOS } from "react-native";

const Reset = (props) => {
  // State For Reset.
  const [reset, setReset] = React.useState({
    email: "",
    password: "",
    confirmpassword: "",
  });

  // Handler For Retreiving Data And Login.
  let userdata, admindata;
  const handleReset = () => {
    axios
      .all([
        axios.get("http://841b5e8a02dd.ngrok.io/users"),
        axios.get("http://841b5e8a02dd.ngrok.io/admin"),
      ])
      .then(async (res) => {
        userdata = await res[0].data;
        admindata = await res[1].data;
        verification();
      })
      .catch((err) => console.log(err));
  };

  // Handlers For Storing And Fetching Data From Local Storage.
  async function save(key, value) {
    await SecureStore.setItemAsync(key, value);
  }

  async function getValueFor(key) {
    let result = await SecureStore.getItemAsync(key);
    return result;
  }

  // Handler For Fetching User.
  const verification = async () => {
    for (let i = 0; i < userdata.length; i++) {
      for (let j = 0; j < admindata.length; j++) {
        if (
          reset.email === userdata[i].email &&
          reset.password === reset.confirmpassword &&
          reset.email !== admindata[j].email &&
          userdata[i].status !== "Blacklisted"
        ) {
          save("id", "" + userdata[i].id);
          resetter();
          break;
        } else if (
          reset.email !== userdata[i].email &&
          reset.password === reset.confirmpassword &&
          reset.email === admindata[j].email
        ) {
          save("id", "" + admindata[j].id);
          resetter();
          break;
        }
      }
    }
  };

  // Resetter For Patching Password.
  const resetter = () => {
    getValueFor("id").then((id) =>
      axios
        .patch(`http://841b5e8a02dd.ngrok.io/users/${id}`, {
          password: reset.password,
        })
        .then((res) => {
          notifier("Password Reset Successful.");
        })
        .catch((err) => console.log(err))
    );
  };

  // Notifier.
  const notifier = (msg) => {
    if (Platform.OS === "android") {
      ToastAndroid.show(msg, ToastAndroid.SHORT);
    } else {
      AlertIOS.alert(msg);
    }
  };

  return (
    <View style={styles.defview}>
      <Text style={styles.texts}>Reset Your FbWatch Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Please Enter Your Email."
        type="email"
        value={reset.email}
        onChangeText={(e) => setReset({ ...reset, email: e })}
      />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Please Enter Your Password."
        type="password"
        value={reset.password}
        onChangeText={(e) => setReset({ ...reset, password: e })}
      />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Please Enter Your Password Again."
        type="password"
        value={reset.confirmpassword}
        onChangeText={(e) => setReset({ ...reset, confirmpassword: e })}
      />

      <TouchableOpacity
        onPress={handleReset}
        style={[styles.touch, { marginBottom: 10 }]}
      >
        <Text style={styles.resettext}>RESET</Text>
      </TouchableOpacity>

      <Text style={styles.texts}>Dont Have an Account? SignUp Now.</Text>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("signup");
        }}
        style={[styles.touch]}
      >
        <Text style={styles.resettext}>SIGNUP</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  resettext: {
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

export default Reset;
