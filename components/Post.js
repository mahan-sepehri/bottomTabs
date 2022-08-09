import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Post = ({ item }) => {
  const description = item.description
    ? item.description.substring(0, 201)
    : "";
  return (
    <View style={styles.itemWrapperStyle}>
      <Image
        style={styles.postImage}
        source={{
          uri: item.image,
        }}
        resizeMode="cover"
      />
      <Text style={styles.postTitle}>{item.title}</Text>
      <Text style={styles.postDescription}>{description}</Text>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  itemWrapperStyle: {
    borderRadius: 10,
    paddingHorizontal: 13,
    paddingTop: 16,
    backgroundColor: "white",
    marginBottom: 12,
  },
  postImage: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 10,
    backgroundColor: "#F5F5F5",
  },
  postTitle: {
    fontFamily: "Roboto500",
    fontSize: 16,
    color: "#3B5266",
    marginTop: 32,
    marginBottom: 10,
    textAlign: "left",
  },
  postDescription: {
    fontFamily: "Roboto300",
    fontSize: 14,
    letterSpacing: 0.4,
    color: "#3B5266",
    marginBottom: 24,
  },
});
