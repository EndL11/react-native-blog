import * as React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";

import { Post } from "./Post";

export const PostsList = ({ data = [], openPost }) => {
  if (!data.length) {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.noItems}>No posts yet</Text>
      </View>
    );
  }

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={data}
        keyExtractor={(post) => post.id.toString()}
        renderItem={({ item }) => {
          return <Post post={item} onOpen={openPost} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
  noItems: {
      fontFamily: 'balsamiqSans_BoldItalic',
      fontSize: 22,
      textAlign: 'center',
      marginVertical: 20
  }
});
