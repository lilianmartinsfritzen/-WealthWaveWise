import React from "react";
import { Dashboard } from "./src/screens/Dashboard";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Barlow-Thin": require("./assets/fonts/Barlow-Thin.ttf"),
    "Barlow-ExtraLight": require("./assets/fonts/Barlow-ExtraLight.ttf"),
    "SairaCondensed-Light": require("./assets/fonts/SairaCondensed-Light.ttf"),
    "SairaCondensed-Medium": require("./assets/fonts/SairaCondensed-Medium.ttf"),
    "SairaCondensed-Regular": require("./assets/fonts/SairaCondensed-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <Dashboard />;
}
