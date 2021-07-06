import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Button,
  Alert,
  Image,
  ImageBackground,
} from "react-native";

export default class ButtonBasics extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          justifyContent: "flex-end",
        }}
      >
        {/* <Image
          source={require("../../assets/bg.jpg")}
          style={{ height: 100, width: 500, marginTop: 200 }}
        />
        <Button
          title="Screen 1"
          onPress={() => {
            this.scroll.scrollTo({ y: 700 });
          }}
        /> */}

        <ScrollView ref={(node) => (this.scroll = node)}>
          <View style={{ height: 900, width: 500 }}>
            <ImageBackground
              source={require("../../assets/bg.jpg")}
              style={{ height: "100%", width: "100%" }}
            >
              <View
                style={{
                  position: "absolute",
                  width: 150,
                  height: 150,
                  alignItems: "center",
                  justifyContent: "center",
                  left: 140,
                  bottom: 100,
                }}
              >
                <Button
                  title="Screen 1"
                  onPress={() => {
                    this.scroll.scrollTo({ animated: true, y: 700 });
                  }}
                />
              </View>
            </ImageBackground>
          </View>
          <View style={{ height: 200 }}></View>
        </ScrollView>
      </View>
      // <View>
      //   <View>
      //     <View style={{ marginTop: 100 }}>
      //       <Button
      //         title="Screen 1"
      //         onPress={() => {
      //           this.scroll.scrollTo({ y: 900 });
      //         }}
      //       />
      //     </View>
      //     <View style={{ marginTop: 100 }}>
      //       <Button
      //         title="Screen 2"
      //         onPress={() => {
      //           this.scroll.scrollTo({ y: 0 });
      //         }}
      //       />
      //     </View>
      //   </View>
      //   <ScrollView ref={(node) => (this.scroll = node)}>
      //     <View>
      //       <Text>Screen 1</Text>
      //     </View>
      //     <View
      //       style={{ height: 900, backgroundColor: "black", marginBottom: 100 }}
      //     ></View>
      //     <View style={{ marginBottom: 200 }}>
      //       <Text>Screen dsfffffffffff2</Text>
      //     </View>
      //   </ScrollView>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: "#abe3a8",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  ScrollContainer: {
    backgroundColor: "#cdf1ec",
    flexGrow: 1,
    marginTop: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  ScrollTextContainer: {
    fontSize: 20,
    padding: 15,
    color: "#000",
    textAlign: "center",
  },
  ButtonViewContainer: {
    flexDirection: "row",
    paddingTop: 35,
  },
  ButtonContainer: {
    padding: 30,
  },
});
