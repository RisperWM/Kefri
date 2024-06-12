import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../constants/colors";

const Excursion = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/excurssions.png")}
        style={[styles.background, { height: 180 }]}
      >
        <Text style={styles.text}>In-Congress Excursions</Text>
      </ImageBackground>
    </View>
  );
};

export default Excursion;

const styles = StyleSheet.create({
  container: {
    padding: 25,
  },
  background: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: colors.button,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "800",
  },
});
