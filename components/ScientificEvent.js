import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import colors from "../constants/colors";
import { Entypo } from "@expo/vector-icons";

const events = [
  {
    id: 1,
    image: require("../assets/programimage1.png"),
    title: "Mitigating Climate Change through Forest Conservation",
    speakers:
      "Speakers: Dr. Amina Mohamed, Environmental Scientist; Mr. John Kiprotich, Forestry Expert",
    time: "Time: April 10, 9:00 AM - 10:30 AM",
    location: "Location: Hall A, Nairobi Convention Center",
  },
  {
    id: 2,
    image: require("../assets/programimage2.png"),
    title: "Innovative Reforestation Techniques for Carbon Sequestration",
    speakers:
      "Speakers: Prof. Isaac Wangai, Botanist; Ms. Lydia Moraa, Climate Change Advocate",
    time: "Time: April 10, 11:00 AM - 12:30 PM",
    location: "Location: Hall B, Nairobi Convention Center",
  },
];

const Programs = () => {
  return (
    <View style={styles.programsContainer}>
      {events.map((event) => (
        <View key={event.id} style={styles.eventContainer}>
          {event.id % 2 === 0 ? (
            <>
              <View style={styles.programDetails}>
                <View>
                  <Text style={styles.text}>{event.title}</Text>
                </View>

                <View style={styles.point}>
                  <Entypo name="dot-single" size={15} color="white" />
                  <Text style={styles.text}>{event.speakers}</Text>
                </View>

                <View style={styles.point}>
                  <Entypo name="dot-single" size={15} color="white" />
                  <Text style={styles.text}>{event.time}</Text>
                </View>

                <View style={styles.point}>
                  <Entypo name="dot-single" size={15} color="white" />
                  <Text style={styles.text}>{event.location}</Text>
                </View>
              </View>
              <View style={styles.imageContainer}>
                <Image source={event.image} style={styles.image} />
              </View>
            </>
          ) : (
            <>
              <View style={styles.imageContainer}>
                <Image source={event.image} style={styles.image} />
              </View>
              <View style={styles.programDetails}>
                <View style={styles.point}>
                  <Text style={styles.text}>{event.title}</Text>
                </View>

                <View style={styles.point}>
                  <Entypo name="dot-single" size={15} color="white" />
                  <Text style={styles.text}>{event.speakers}</Text>
                </View>

                <View style={styles.point}>
                  <Entypo name="dot-single" size={15} color="white" />
                  <Text style={styles.text}>{event.time}</Text>
                </View>

                <View style={styles.point}>
                  <Entypo name="dot-single" size={15} color="white" />
                  <Text style={styles.text}>{event.location}</Text>
                </View>
              </View>
            </>
          )}
        </View>
      ))}
    </View>
  );
};

export default Programs;

const styles = StyleSheet.create({
  programsContainer: {
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  eventContainer: {
    flexDirection: "row",
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    borderRadius: 20,
    borderColor: colors.card,
    borderWidth: 3,
  },
  image: {
    width: 80,
    height: 80,
  },
  point:{
    flexDirection:"row",
    alignItems:"center"
  },
  programDetails: {
    flex: 1,
    borderColor: colors.border,
    borderWidth: 1,
    height:78,
    padding:3,
  },
  text: {
    color: colors.white,
    fontSize: 10,
  },
});
