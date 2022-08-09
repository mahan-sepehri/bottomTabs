import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import Post from "../components/Post";

import getPosts from "../api/getPosts";

const Posts = () => {
  const [pageNum, setPageNum] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPosts = async (num = 1) => {
    setIsLoading(true);
    const result = await getPosts(num);
    if (
      result &&
      result.success &&
      result.data &&
      result.data.data.length > 0
    ) {
      setPosts((current) => [...current, ...result.data.data]);
      if (result.data.hasNextPage) {
        setHasNextPage(true);
      } else {
        setHasNextPage(false);
      }
    }
    setIsLoading(false);
  };

  useEffect(() => {
    console.log(posts.length);
  }, [posts]);

  useEffect(() => {
    fetchPosts(pageNum);
  }, [pageNum]);

  const renderItem = ({ item }) => {
    return <Post item={item} />;
  };

  const loadMoreItem = () => {
    console.log("loading more item");
    if (hasNextPage && !isLoading) {
      setPageNum((current) => current + 1);
    }
  };

  const renderLoader = () => {
    return (
      <View style={styles.loaderStyle}>
        {isLoading && <ActivityIndicator size="large" color="#aaa" />}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      <View style={{ flex: 1, width: "100%" }}>
        <FlatList
          data={posts}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          onEndReached={loadMoreItem}
          onEndReachedThreshold={0.1}
          ListFooterComponent={renderLoader}
        />
      </View>
    </SafeAreaView>
  );
};

export default Posts;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    paddingHorizontal: 11,
    paddingTop: 16,
  },
  loaderStyle: {
    marginTop: 15,
    marginBottom: 60,
  },
});
