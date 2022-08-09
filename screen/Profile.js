import { StyleSheet, Text, SafeAreaView, StatusBar } from "react-native";
import React from "react";

const Profile = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      <Text style={styles.pageText}>Profile</Text>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    justifyContent: "center",
    alignItems: "center",
  },
  pageText: {
    fontFamily: "Roboto400",
    fontSize: 24,
    color: "#3B5266",
  },
});
