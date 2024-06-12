import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import colors from "../constants/colors";
import { MaterialIcons } from "@expo/vector-icons";

const calendars = [
  {
    id: 1,
    image: require("../assets/calendarimg1.png"),
    date: "20",
    month: "May",
    title: "Remote Work and Digital Nomadism",
    location: "Nakuru",
  },
  {
    id: 2,
    image: require("../assets/calendarimg2.png"),
    date: "20",
    month: "May",
    title: "Remote Work and Digital Nomadism",
    location: "Nakuru",
  },
  {
    id: 3,
    image: require("../assets/calendarimg3.png"),
    date: "20",
    month: "May",
    title: "Remote Work and Digital Nomadism",
    location: "Nakuru",
  },
];

const Calendar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.climateTitle}>Calendar</Text>
      {calendars.map((calendar) => (
        <View key={calendar.id} style={styles.subContainer}>
          <ImageBackground source={calendar.image} style={[styles.background]}>
            <View style={styles.details}>
              <Text style={styles.date}>{calendar.date}</Text>
              <Text style={styles.month}>{calendar.month}</Text>
              <Text style={styles.title}>{calendar.title}</Text>
              <Text style={styles.location}>{calendar.location}</Text>
              <TouchableOpacity style={styles.readmore}>
                <Text
                  style={{ fontWeight: "800", fontSize: 16, color: "white" }}
                >
                  Read More
                </Text>
                <MaterialIcons
                  name="keyboard-double-arrow-right"
                  size={20}
                  color="white"
                />
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      ))}
    </View>
  );
};

export default Calendar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    backgroundColor: "#fff",
  },
  subContainer: {
    marginBottom: 20,
    backgroundColor: "#B1F6F6",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10,
    overflow: "hidden",
  },
  climateTitle: {
    color: colors.button,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "800",
    padding: 20,
  },
  background: {
    width: "100%",
    justifyContent: "center",
  },
  details: {
    padding: 15,
    borderRadius: 10,
  },
  date: {
    fontSize: 40,
    fontWeight: "600",
    color: colors.white,
  },
  month: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.white,
    textTransform: "uppercase",
    paddingBottom: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: colors.white,
    marginVertical: 7,
  },
  location: {
    fontSize: 25,
    fontWeight: "600",
    color: colors.white,
    marginBottom: 10,
  },
  readmore: {
    alignSelf: "flex-end",
    flexDirection: "row",
    alignItems: "center",
  },
});
