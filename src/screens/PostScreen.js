import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text, StyleSheet, ScrollView, Image, Alert } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { THEME } from "../theme";
import { AppDateTitle } from "../components/AppDateTitle";
import { AppButton } from "../components/AppButton";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { toggleBooked, deletePost } from "../store/actions/post";

export const PostScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const postId = navigation.getParam("postId");

  const post = useSelector((state) =>
    state.post.allPosts.find((post) => post.id === postId)
  );

  const booked = useSelector((state) =>
    state.post.bookedPosts.some((post) => post.id === postId)
  );

  useEffect(() => {
    navigation.setParams({ booked });
  }, [booked]);

  const toggleHandler = useCallback(() => {
    dispatch(toggleBooked(post));
  }, [dispatch, post]);

  useEffect(() => {
    navigation.setParams({ toggleHandler });
  }, [toggleHandler]);

  const removePost = () => {
    Alert.alert(
      "Delete post",
      "Are you sure want to delete this post?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          style: "destructive",
          onPress() {
            navigation.navigate("Main");
            dispatch(deletePost(postId));
          },
        },
      ],
      { cancelable: false }
    );
  };

  const editPost = () => {
    navigation.navigate("Edit", { post });
  };

  if (!post) {
    return null;
  }

  return (
    <ScrollView>
      <AppDateTitle style={styles.date} date={post.date} />
      <Image source={{ uri: post.img }} style={styles.image} />
      <View style={styles.textWrap}>
        <Text style={styles.title}>{post.title}</Text>
        <Text style={styles.text}>{post.text}</Text>
      </View>
      <View style={styles.buttons}>
        <AppButton
          style={styles.button}
          title="Delete"
          color={THEME.DANGER_COLOR}
          onClick={removePost}
        />
        <AppButton
          style={styles.button}
          title="Edit"
          color={THEME.EDIT_COLOR}
          onClick={editPost}
        />
      </View>
    </ScrollView>
  );
};

PostScreen.navigationOptions = ({ navigation }) => {
  const title = navigation.getParam("title");
  const booked = navigation.getParam("booked");
  const toggleHandler = navigation.getParam("toggleHandler");
  const iconName = booked ? "ios-star" : "ios-star-outline";
  return {
    headerTitle: title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item title="Book" iconName={iconName} onPress={toggleHandler} />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  date: {
    alignItems: "center",
    backgroundColor: "rgba(11, 51, 205, 0.7)",
    paddingVertical: 10,
  },
  textWrap: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontFamily: "balsamiqSans_Italic",
    textAlign: "justify",
  },
  title: {
    fontSize: 18,
    fontFamily: "balsamiqSans_Bold",
    marginBottom: 15,
  },
  buttons: {
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 30,
    alignItems: "center",
    justifyContent: "space-around",
  },
  button: {
    width: "45%",
    paddingVertical: 5,
    borderBottomColor: "#000",
    borderBottomWidth: 2,
  },
});
