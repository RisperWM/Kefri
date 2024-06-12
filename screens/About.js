import React from "react";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import colors from "../constants/colors";
import HomeNav from "../components/HomeNav";
import Programs from "../components/Programs";

const About = () => {
  return (
    <ScrollView style={styles.container}>
      <HomeNav />
      <View>
        <Text style={styles.heading}>Our Programs</Text>
        <Text style={styles.description}>
          Forest research plays a pivotal role in addressing the multifaceted
          challenges facing global forests and ecosystems. Through the
          systematic study of forest dynamics, conservation strategies, and
          sustainable management practices, forest research offers
        </Text>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/monkey.png")}
            style={styles.overlayImage}
          />
        </View>
        <View style={styles.programs}>
          <Programs />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    padding: 5,
    textAlign: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    marginVertical: 30,
    color: colors.white,
  },
  description: {
    fontSize: 12,
    textAlign: "center",
    marginHorizontal: 12,
    marginBottom: 40,
    color: colors.white,
  },
  imageContainer: {
    width: 200,
    height: 260,
    backgroundColor: colors.card,
    borderRadius: 38,
    alignItems: "center",
    justifyContent: "center",
    transform: [{ translateX: 70 }],
  },
  overlayImage: {
    width: 200,
    height: 260,
    borderRadius: 38,
    position: "absolute",
    top: 8,
    right: 8,
  },
  programs: {
    paddingVertical: 40,
  },
});

export default About;
