import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../constants/colors";
import HomeNav from "../components/HomeNav";
import PartnerDetails from "../components/PartnerDetails";
import PartnerDesc from "../components/PartnerDesc";

const Partner = () => {
  return (
    <ScrollView style={styles.container}>
      <HomeNav />
      <View style={styles.heading}>
        <Text style={styles.title}>Partners</Text>
        <Text style={styles.subtitle}>KEFRI Partners</Text>
      </View>
      <View>
        <PartnerDetails/>
      </View>
      <View>
        <PartnerDesc/>
      </View>
    </ScrollView>
  );
};

export default Partner;

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
    marginTop: 30,
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
