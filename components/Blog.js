import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../constants/colors";

const blog = [
  {
    id: 1,
    image: require("../assets/blog-image.png"),
    title: "Sustainable Forest Management",
    text: "KEFRI champions sustainable forest management as its core philosophy, merging research with innovation to safeguard Kenya's forest health and longevity. Its strategies for eco-friendly reforestation, species conservation, and sustainable harvesting ensure forests' continued role as biodiversity, water, and heritage sources.",
  },
  {
    id: 2,
    image: require("../assets/blog-image.png"),
    title: "Sustainable Forest Management",
    text: "KEFRI champions sustainable forest management as its core philosophy, merging research with innovation to safeguard Kenya's forest health and longevity. Its strategies for eco-friendly reforestation, species conservation, and sustainable harvesting ensure forests' continued role as biodiversity, water, and heritage sources.",
  },
  {
    id: 3,
    image: require("../assets/blog-image.png"),
    title: "Sustainable Forest Management",
    text: "KEFRI champions sustainable forest management as its core philosophy, merging research with innovation to safeguard Kenya's forest health and longevity. Its strategies for eco-friendly reforestation, species conservation, and sustainable harvesting ensure forests' continued role as biodiversity, water, and heritage sources.",
  },
  {
    id: 4,
    image: require("../assets/blog-image.png"),
    title: "Sustainable Forest Management",
    text: "KEFRI champions sustainable forest management as its core philosophy, merging research with innovation to safeguard Kenya's forest health and longevity. Its strategies for eco-friendly reforestation, species conservation, and sustainable harvesting ensure forests' continued role as biodiversity, water, and heritage sources.",
  },
];

const BlogCard = ({ blog }) => (
  <View style={styles.card}>
    <View style={styles.imageContainer}>
      <Image source={blog.image} style={styles.image} />
    </View>
    <View style={styles.details}>
      <Text style={styles.title}>{blog.title}</Text>
      <Text style={styles.info}>{blog.text}</Text>
    </View>
    <View style={styles.btn}>
      <TouchableOpacity style={styles.btnReadMore}>
        <Text style={styles.btnText}>Read More</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const BlogList = () => {
  return (
    <FlatList
      data={blog}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <BlogCard blog={item} />}
      horizontal={true}
      contentContainerStyle={styles.container}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default BlogList;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: "#263D23",
    borderRadius: 8,
    overflow: "hidden",
    marginHorizontal: 10,
    width: 245,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imageContainer: {
    height: 220,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  details: {
    padding: 10,
  },
  title: {
    fontSize: 13,
    fontWeight: "800",
    marginBottom: 5,
    color:colors.white
  },
  info: {
    fontSize: 12,
    color: colors.white,
  },
  btn:{
    justifyContent:"center",
    alignItems:"center",
    padding:15
  },
  btnReadMore:{
    width:"98%",
    backgroundColor:colors.card,
    borderRadius:5
  },
  btnText:{
    textAlign:"center",
    padding:8,
    color:colors.white,
    fontSize:15
  }
});
