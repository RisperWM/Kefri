import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Entypo, AntDesign, FontAwesome6, Feather } from "@expo/vector-icons";

const Footer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.divider}></View>
      <View style={styles.footerContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/kefri-logo.png")}
            style={styles.logo}
          />
        </View>
        <View style={styles.mediaContainer}>
          <View style={styles.iconsContainer}>
            <TouchableOpacity>
              <Entypo
                name="instagram"
                size={20}
                color="black"
                style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesign
                name="linkedin-square"
                size={20}
                color="black"
                style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome6
                name="square-x-twitter"
                size={20}
                color="black"
                style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather
                name="youtube"
                size={20}
                color="black"
                style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesign
                name="facebook-square"
                size={20}
                color="black"
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.footerTextContainer}>
            <Feather name="at-sign" size={16} color="black" />
            <Text style={styles.footerText}>2024 IUFRO</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  footerContainer: {
    flexDirection: "row",
    marginBottom: 10,
    justifyContent: "space-between",
  },
  divider: {
    height: 1,
    backgroundColor: "#000000",
    marginBottom: 8,
  },
  logoContainer: {
    margin: 10,
  },
  logo: {
    resizeMode: "contain",
  },
  mediaContainer: {
    flexDirection: "col",
    justifyContent: "flex-end",
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 5,
  },
  icon: {
    paddingHorizontal: 5,
  },
  footerTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  footerText: {
    fontSize: 18,
    marginLeft: 5,
    fontWeight: "600",
  },
});
