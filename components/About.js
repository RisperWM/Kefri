import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Video } from "expo-av";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import colors from "../constants/colors";

const About = () => {

  const videoRef = React.useRef(null);
  const [isPlaying, setIsPlaying] = React.useState(false);

  const togglePlay = async () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      await videoRef.current.pauseAsync();
    } else {
      await videoRef.current.playAsync();
    }

    setIsPlaying(!isPlaying);
  };

  const pauseVideo = async () => {
    if (!videoRef.current) return;

    await videoRef.current.pauseAsync();
    setIsPlaying(false);
  };

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.objectTitle}>About IUFRO 2029</Text>
        <Text style={styles.aboutText}>
          Overview of IUFRO 2029 "Welcome to the International Union of Forest
          Research Organizations' 2029 Congress — a pivotal platform where the
          global forestry research community converges to shape the future of
          forests and forestry.{" "}
        </Text>
        <Text style={styles.aboutText}>
          This congress aims to foster discussions on sustainable forest
          management, the impact of climate change on forests, and innovative
          technologies in forestry."
        </Text>
      </View>
      <View>
        <Video
          ref={videoRef}
          source={require("../assets/video.mp4")}
          style={styles.video}
          useNativeControls={false}
          resizeMode="contain"
          isLooping
        />

        {!isPlaying ? (
          <TouchableOpacity style={styles.playButton} onPress={togglePlay}>
            <AntDesign name="playcircleo" size={40} color="white" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.pauseButton} onPress={pauseVideo}>
            <FontAwesome6 name="pause" size={24} color="white" />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.objectContainer}>
        <View style={styles.objectTitleContainer}>
          <Text style={styles.objectTitle}>Objectives of the Congress</Text>
        </View>
        <View style={styles.textContainer}>
          <Entypo name="dot-single" size={17} color="black" />
          <Text style={styles.objectText}>
            To advance scientific research and collaborations in forestry.
          </Text>
        </View>
        <View style={styles.textContainer}>
          <Entypo name="dot-single" size={17} color="black" />
          <Text style={styles.objectText}>
            To discuss innovative solutions to global forestry challenges.
          </Text>
        </View>
        <View style={styles.textContainer}>
          <Entypo name="dot-single" size={17} color="black" />
          <Text style={styles.objectText}>
            To disseminate knowledge and findings among international
            stakeholders.
          </Text>
        </View>
        <TouchableOpacity style={styles.buttonRegister}>
          <Text>Learn More</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  aboutText: {
    fontSize: 11,
    paddingTop: 6,
    fontWeight: "500",
  },
  video: {
    width: "100%",
    height: 200,
    marginTop: 20,
  },
  playButton: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    borderRadius: 25,
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
    left: "50%",
    top: "50%",
    marginLeft: -25,
    marginTop: -25,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  objectContainer: {
    paddingVertical: 10,
  },
  objectTitleContainer: {
    alignItems: "left",
  },
  objectTitle: {
    fontSize: 18,
    fontWeight: "800",
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  objectText: {
    fontSize: 12,
  },
  buttonRegister: {
    backgroundColor: colors.button,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: "30%",
    marginTop: 10,
  },
});
