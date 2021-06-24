import "react-native-gesture-handler";
import React from "react";

import NavigationController from "./src/components/Navigation";
import { MenuProvider } from "react-native-popup-menu";

export default function App() {
  return (
    <MenuProvider>
      <NavigationController />
    </MenuProvider>
  );
}
