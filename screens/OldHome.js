import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../constants/colors";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <View style={styles.container}>
     <Hero/>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    padding:5,
  },
});
