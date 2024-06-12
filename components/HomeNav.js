import React from "react";
import { Image, SafeAreaView, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeNav = () => {
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.subContainer}>
        <View style={styles.image}>
          <Image
            source={require("../assets/UIFRO2029_logo_bglss.png")}
            style={styles.logo}
          />
        </View>
        <TouchableOpacity style={styles.links} onPress={openDrawer}>
          <MaterialIcons name="menu" size={24} color="white" />
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#33B864",
  },
  subContainer: {
    flexDirection: "row",
    paddingTop: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 30,
    resizeMode: "contain",
  },
  image: {
    paddingHorizontal: 10,
  },
  links: {
    padding: 8,
  },
});

export default HomeNav;
