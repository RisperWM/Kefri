import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ScrollView,
  TextInput,
} from "react-native";
import HomeNav from "./HomeNav";
import colors from "../constants/colors";
import { useFonts, InknutAntiqua_500Medium } from "@expo-google-fonts/inknut-antiqua";
import HomeInfo from "./HomeInfo";
import { Video } from "expo-av";

const Hero = () => {
  const [fontsLoaded] = useFonts({
    InknutAntiqua_500Medium,
  });

  const screenHeight = Dimensions.get("window").height;
  const backgroundHeight = screenHeight * 0.32;
  const [text, setText] = useState("");

  if (!fontsLoaded) {
    return <Text>Loading ...</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      <HomeNav />
      <View style={styles.content}>
        <Video
          source={require("../assets/landingImage.mp4")}
          style={[styles.background, { height: backgroundHeight }]}
          resizeMode="cover"
          shouldPlay
          isLooping
          isMuted
        />
        <View style={styles.overlayContainer}>
          <Text style={styles.titleText}>
            Welcome to the International Union of Forest Research Organizations' 2029 Congress
          </Text>
          <Text style={styles.subtitleText}>
            Advancing knowledge about forestry, promoting the sustainable management of forest resources
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Search"
            value={text}
            onChangeText={setText}
          />
          <Text style={[styles.locationText, { fontFamily: "InknutAntiqua_500Medium" }]}>
            Nairobi - June 2nd - 22nd 2029
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonRegister}>
              <Text style={styles.buttonText}>
                Register
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonRead}>
              <Text style={styles.buttonText}>
                Read More
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <HomeInfo/>
    </ScrollView>
  );
};

export default Hero;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  overlayContainer: {
    flex: 1,
    paddingHorizontal: 14,
    paddingVertical: 20,
  },
  titleText: {
    color: "white",
    fontSize: 15,
    fontWeight: "800",
    paddingVertical: 10,
  },
  subtitleText: {
    color: "white",
    fontSize: 10,
    paddingVertical: 5,
  },
  input: {
    backgroundColor: colors.white,
    width: "50%",
    height: 35,
    borderRadius: 20,
    paddingHorizontal: 15,
    marginVertical: 5,
    color: colors.black,
  },
  locationText: {
    color: "white",
    fontSize: 13,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap:5
  },
  buttonRegister: {
    backgroundColor: colors.button,
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  buttonRead: {
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});
