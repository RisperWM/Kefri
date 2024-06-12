import { StyleSheet, Text, View } from "react-native";
import React from "react";
import About from "./About";
import SpeakerList from "./SpeakerList";
import colors from "../constants/colors";
import ClimateChange from "./ClimateChange";
import News from "./News";
import Excursion from "./Excursion";
import Calendar from "./Calendar";
import PartnerDetails from "./PartnerDetails";
import Footer from "./Footer";

const HomeInfo = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>IUFRO Conference</Text>
      </View>
      <View>
        <About />
      </View>
      <View>
        <SpeakerList />
      </View>
      <View>
        <ClimateChange />
      </View>
      <View>
        <News />
      </View>
      <View>
        <Excursion />
      </View>
      <View>
        <Calendar />
      </View>
      <PartnerDetails/>
      <Footer/>
    </View>
  );
};

export default HomeInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: "center",
    color: colors.button,
    paddingVertical: 10,
    fontWeight: "600",
    fontSize:20
  },
});
