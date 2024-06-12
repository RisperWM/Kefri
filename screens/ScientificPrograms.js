import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../constants/colors";
import HomeNav from "../components/HomeNav";
import ScientificEvent from "../components/ScientificEvent";
import SpeakerList from "../components/SpeakerList";

const ScientificPrograms = () => {
  return (
    <ScrollView style={styles.container}>
      <HomeNav />
      <View style={styles.heading}>
        <Text style={styles.title}>Scientific Program</Text>
        <Text style={styles.subtitle}>Forest and Climate Change</Text>
      </View>
      <View style={styles.scientificEvent}>
        <ScientificEvent />
      </View>
      <View>
        <SpeakerList/>
      </View>
    </ScrollView>
  );
};

export default ScientificPrograms;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    padding: 5,
    textAlign: "center",
  },
  heading: {
    alignItems: "center",
  },
  title: {
    marginTop:30,
    fontSize: 32,
    fontWeight: "800",
    color: colors.white,
    height: 70,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: "400",
    color: colors.white,
    height: 60,
  },
});
