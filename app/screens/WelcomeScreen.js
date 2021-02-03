import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      blurRadius={2}
      style={styles.background}
      source={require("../assets/hotdog.jpg")}
    >
      <Text>SEEFOOD</Text>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
