import Navigator from "./navigation/navigator";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded] = useFonts({
    IcoMoon: require("./assets/iconFont/icomoon.ttf"),
    Roboto300: require("./assets/fonts/Roboto300.ttf"),
    Roboto400: require("./assets/fonts/Roboto400.ttf"),
    Roboto500: require("./assets/fonts/Roboto500.ttf"),
    Roboto700: require("./assets/fonts/Roboto700.ttf"),
  });

  useEffect(() => {
    const hideSplash = async () => {
      await SplashScreen.hideAsync();
    };
    if (loaded) {
      hideSplash();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <Navigator />;
}
