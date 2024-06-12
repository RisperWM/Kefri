import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BlogList from "../components/Blog";
import colors from '../constants/colors'
import HomeNav from '../components/HomeNav'

const Blog = () => {
  return (
    <View style={styles.container}>
      <HomeNav />
      <View>
        <Text style={styles.heading}>Blogs</Text>
        <Text style={styles.description}>
          KEFRI stands as a beacon of hope in Kenya, pivotal in forest
          conservation, climate mitigation, and community empowerment,
          showcasing the nation's commitment to environmental stewardship.
        </Text>
      </View>
      <View>
        <BlogList/>
      </View>
    </View>
  );
};

export default Blog;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    padding: 5,
    textAlign: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    marginVertical: 30,
    color: colors.white,
  },
  description: {
    fontSize: 12,
    textAlign: "center",
    marginHorizontal: 12,
    marginBottom: 40,
    color: colors.white,
  },
});
