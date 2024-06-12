import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const images = [
  { id: 0, image: require("../assets/partner/airfrancairlines.png") },
  { id: 1, image: require("../assets/partner/air_indialogo.png") },
  { id: 2, image: require("../assets/partner/Air_Malawilogo.png") },
  { id: 3, image: require("../assets/partner/air-australlogo.png") },
  { id: 4, image: require("../assets/partner/britishairwayslogo.png") },
  { id: 5, image: require("../assets/partner/China-Southern-Airlines-Logo.png") },
  { id: 6, image: require("../assets/partner/Emirates_logo.png") },
  { id: 7, image: require("../assets/partner/Ethiopianairlines.png") },
  { id: 8, image: require("../assets/partner/etihad-airwayslogo.png") },
  { id: 9, image: require("../assets/partner/jubbaairways.jpg") },
  { id: 10, image: require("../assets/partner/klmlogo.jpg") },
  { id: 11, image: require("../assets/partner/KQlogo.png") },
  { id: 12, image: require("../assets/partner/lufthansa-logo.png") },
  { id: 13, image: require("../assets/partner/SingaporeAirlineslogo.png") },
  { id: 14, image: require("../assets/partner/Turkishairlines.png") },
];

const PartnerDetails = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Partners</Text>
      <Text
        style={{
          textAlign: "center",
          color: "#43AC7A",
          fontSize: 20,
          fontWeight: "600",
          paddingVertical: 15,
        }}
      >
        Thank you to our esteemed partners
      </Text>
      <View
        style={{
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {images.map((image) => (
          <View key={image.id} style={styles.subContainer}>
            <Image source={image.image} style={styles.image} />
          </View>
        ))}
      </View>
    </View>
  );
};

export default PartnerDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  title: {
    color: "red",
    textAlign: "center",
    fontSize: 25,
    fontWeight: "800",
    paddingTop: 10,
  },
  subContainer: {
    paddingHorizontal: 6,
  },
  image: {
    width: 100,
    height: 60,
    resizeMode: "contain",
  },
});
