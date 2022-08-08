import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabs from "./BottomTabs";

const Navigator = () => {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
};

export default Navigator;
