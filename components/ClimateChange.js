import React, { useState, useRef } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Video } from "expo-av";
import { Entypo, AntDesign, FontAwesome6 } from "@expo/vector-icons";
import colors from "../constants/colors";

const datas = [
  {
    id: 1,
    videoUrl: require("../assets/forestVideo.mp4"),
    title: "Mitigating Climate Change through Forest Conservation",
    speaker:
      "Dr. Amina Mohamed, Environmental Scientist; Mr. John Kiprotich, Forestry Expert",
    time: "April 10, 9:00 AM - 10:30 AM",
    location: "Hall A, Nairobi Convention Center",
  },
  {
    id: 2,
    videoUrl: require("../assets/forestVideo.mp4"),
    title: "Mitigating Climate Change through Forest Conservation",
    speaker:
      "Dr. Amina Mohamed, Environmental Scientist; Mr. John Kiprotich, Forestry Expert",
    time: "April 10, 9:00 AM - 10:30 AM",
    location: "Hall A, Nairobi Convention Center",
  },
  {
    id: 3,
    videoUrl: require("../assets/forestVideo.mp4"),
    title: "Mitigating Climate Change through Forest Conservation",
    speaker:
      "Dr. Amina Mohamed, Environmental Scientist; Mr. John Kiprotich, Forestry Expert",
    time: "April 10, 9:00 AM - 10:30 AM",
    location: "Hall A, Nairobi Convention Center",
  },
];

const ClimateChange = () => {
  const videoRefs = useRef(datas.map(() => React.createRef()));
  const [isPlaying, setIsPlaying] = useState(Array(datas.length).fill(false));

  const togglePlay = async (index) => {
    const newIsPlaying = [...isPlaying];
    newIsPlaying[index] = !newIsPlaying[index];
    setIsPlaying(newIsPlaying);

    if (!videoRefs.current[index].current) return;

    if (newIsPlaying[index]) {
      await videoRefs.current[index].current.playAsync();
    } else {
      await videoRefs.current[index].current.pauseAsync();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.climateTitle}>Forest and Climate Change</Text>
      {datas.map((data, index) => (
        <View key={data.id} style={styles.subContainer}>
          <View style={styles.videoContainer}>
            <Video
              ref={videoRefs.current[index]}
              source={data.videoUrl}
              style={styles.video}
              useNativeControls={false}
              resizeMode="contain"
              isLooping
            />
            {!isPlaying[index] ? (
              <TouchableOpacity
                style={styles.playButton}
                onPress={() => togglePlay(index)}
              >
                <AntDesign name="playcircleo" size={40} color="white" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.pauseButton}
                onPress={() => togglePlay(index)}
              >
                <FontAwesome6 name="pause" size={24} color="white" />
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.details}>
            <Text style={styles.speakerTitle}>{data.title}</Text>
            <View style={styles.speakerDetails}>
              <Entypo name="dot-single" size={20} color="black" />
              <Text style={styles.speakerTitles}>
                Speakers: <Text style={styles.speakerdata}>{data.speaker}</Text>
              </Text>
            </View>
            <View style={styles.speakerDetails}>
              <Entypo name="dot-single" size={20} color="black" />
              <Text style={styles.speakerTitles}>
                Time: <Text style={styles.speakerdata}>{data.time}</Text>
              </Text>
            </View>
            <View style={styles.speakerDetails}>
              <Entypo name="dot-single" size={20} color="black" />
              <Text style={styles.speakerTitles}>
                Location:{" "}
                <Text style={styles.speakerdata}>{data.location}</Text>
              </Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

export default ClimateChange;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 28,
  },
  subContainer: {
    marginBottom: 20,
    backgroundColor: "#89FDA3",
    // Box shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 3.84,
    // Box shadow for Android
    elevation: 5,
  },
  climateTitle: {
    color: colors.button,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "800",
    padding: 20,
  },
  videoContainer: {
    position: "relative",
  },
  video: {
    width: "100%",
    height: 170,
  },
  playButton: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    left: "50%",
    top: "50%",
    marginLeft: -25,
    marginTop: -25,
  },
  pauseButton: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    left: "50%",
    top: "50%",
    marginLeft: -25,
    marginTop: -25,
  },
  details: {
    padding: 15,
  },
  speakerTitle: {
    fontSize: 12,
    paddingBottom: 5,
  },
  speakerDetails: {
    flexDirection: "row",
    alignItems: "center",
  },
  speakerTitles: {
    fontSize: 12,
    fontWeight: "600",
  },
  speakerdata: {
    fontSize: 12,
    fontWeight: "400",
  },
});
