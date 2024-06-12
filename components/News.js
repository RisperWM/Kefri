import React, { useState, useRef } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Video } from "expo-av";
import { Entypo, AntDesign, FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import colors from "../constants/colors";
import { MaterialIcons } from "@expo/vector-icons";

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

const News = () => {
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
      <Text style={styles.climateTitle}>News</Text>
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
                <FontAwesome name="pause" size={24} color="white" />
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.details}>
            <Text style={styles.newsTitle}>Museum</Text>
            <View style={styles.locationDetails}>
              <View style={styles.place}>
                <Image
                  source={require("../assets/location.png")}
                  style={styles.logo}
                />
                <Text style={{fontWeight:"600", fontSize:15,color:"white"}}>Nairobi</Text>
              </View>
              <View style={styles.place}>
                <Ionicons name="calendar" size={24} color="white" />
                <Text style={{fontWeight:"600", fontSize:15,color:"white"}}>20 Mar</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.readmore}>
              <Text style={{fontWeight:"800", fontSize:16, justifyContent:"center", alignItems:"center",textDecorationLine: "underline",    color:"white"}}>
                Read More{" "}
                
              </Text>
              <MaterialIcons
                  name="keyboard-double-arrow-right"
                  size={20}
                  color="white"
                />
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
};

export default News;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 27,
  },
  subContainer: {
    marginBottom: 20,
    backgroundColor: "#BB0000",
    // Box shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 3.84,
    // Box shadow for Android
    elevation: 5,
    borderRadius:10
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
    borderRadius:10
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
  newsTitle:{
    textAlign:"center",
    fontWeight:"800",
    fontSize:20,
    color:"white"
  },
  locationDetails:{
    flexDirection:"row",
    justifyContent:"space-between"
  },
  place:{
    flexDirection:"row",
    gap:7,
    alignItems:"center",
    paddingVertical:20
  },
  readmore:{
    flexDirection:"row",
    justifyContent:"flex-end",
    paddingTop:10,
    textDecorationLine:"underline"
  }
 
});
