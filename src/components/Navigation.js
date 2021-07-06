import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import Home from "../screens/Home";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import Reset from "../screens/Reset";
import Content from "../screens/Content";
import Watch from "../screens/Watch";
import Account from "../screens/Account";

// import UHome from "../screens/UHome";

const RootStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function RootStackScreen() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Group
          screenOptions={{
            headerShown: false,
          }}
        >
          <RootStack.Screen name="Home" component={TabScreen} />
          <RootStack.Screen name="content" component={Content} />
          <RootStack.Screen
            name="watch"
            component={Watch}
            options={{
              headerShown: true,
              title: "Watch",
              headerStyle: {
                backgroundColor: "skyblue",
              },
            }}
          />
        </RootStack.Group>
        <RootStack.Group screenOptions={{ presentation: "modal" }}>
          <RootStack.Screen
            name="login"
            component={Login}
            options={{
              title: "Login",
            }}
          />
          <RootStack.Screen
            name="reset"
            component={Reset}
            options={{
              title: "Reset",
            }}
          />
          <RootStack.Screen
            name="signup"
            component={Signup}
            options={{
              title: "Signup",
            }}
          />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

function TabScreen(props) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "home") {
            iconName = focused ? "ios-home" : "ios-home-outline";
          } else if (route.name === "content") {
            iconName = focused ? "videocam" : "videocam-outline";
          } else if (route.name === "Account") {
            iconName = focused
              ? "account-settings"
              : "account-settings-outline";
            // } else if (route.name === "Tv") {
            //   iconName = focused
            //     ? "account-settings"
            //     : "account-settings-outline";
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#8739F9",
        tabBarInactiveTintColor: "gray",
        size: 15,
      })}
    >
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="content"
        component={Content}
        options={{
          title: "Movies",
          headerStyle: {
            backgroundColor: "skyblue",
          },
        }}
      />
      {/* <Tab.Screen name="Tv" component={TvContent} /> */}
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          headerStyle: {
            backgroundColor: "skyblue",
          },
        }}
      />
    </Tab.Navigator>
  );
}

const NavigationController = () => {
  return <RootStackScreen />;
};

export default NavigationController;
