import React from "react";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import colors from "../constants/colors";

const speakers = [
  {
    id: 1,
    image: require("../assets/speaker1.png"),
    name: "John Doe",
    title: "Controller of Budget of the republic of kenya",
  },
  {
    id: 2,
    image: require("../assets/speaker2.png"),
    name: "John Doe",
    title: "Controller of Budget of the republic of kenya",
  },
  {
    id: 3,
    image: require("../assets/speaker3.png"),
    name: "John Doe",
    title: "Controller of Budget of the republic of kenya",
  },
];

const SpeakerList = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.meetText}>Meet our</Text>
        <Text style={styles.speakerText}>Conference Speakers</Text>
      </View>
      <View style={styles.card}>
        {speakers.map((speaker) => (
          <View key={speaker.id} style={styles.subContainer}>
            <View style={styles.imageContainer}>
              <Image source={speaker.image} style={styles.image} />
            </View>
            <View style={styles.details}>
              <Text style={styles.titleText}>{speaker.name}</Text>
              <Text style={styles.infoText}>{speaker.title}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 5,
  },
  title: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  meetText: {
    color: colors.button,
    fontWeight: "900",
    fontSize: 18,
  },
  speakerText: {
    fontSize: 24,
    fontWeight: "800",
  },
  card: {
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center"
  },
  subContainer:{
    width:"33%",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center"
  },
  details:{
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center"
  },
  titleText:{
    fontSize:14,
    fontWeight:"800"
  },
  infoText:{
    textAlign:"center",
    fontSize:10,
    paddingVertical:2
  }
});

export default SpeakerList;
