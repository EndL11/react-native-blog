import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  TextInput,
  Alert,
  Image
} from "react-native";
import { useDispatch } from "react-redux";

import { AppDateTitle } from "../components/AppDateTitle";
import { AppButton } from "../components/AppButton";
import { THEME } from "../theme";
import { updatePost } from "../store/actions/post";
import { PhotoPicker } from "../components/PhotoPicker";

export const EditScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const post = route.params.post;
  const [title, setTitle] = useState(post.title);
  const [text, setText] = useState(post.text);
  const [img, setImg] = useState(post.img);

  const checkPostValues = () => {
    return !text?.trim() || !title?.trim() || !img?.trim();
  };

  //  try change to 'goBack()'
  const backToPost = () => {
    navigation.navigate("Post", {postId: post.id, booked: post.booked, title: post.title});
  }

  const updatePostHandler = () => {
    if (checkPostValues()) {
      Alert.alert("Error", "You must fill all fields!");
      return;
    }
    const editedPost = {
      id: post.id,
      text,
      title,
      img,
      date: post.date,
      booked: post.booked,
    };
    dispatch(updatePost(editedPost));
    setText("");
    setTitle("");
    setImg("");
    backToPost()
  };

  const getPhoto = (uri) => {
    setImg(uri);
  };

  return (
    <ScrollView style={styles.container}>
      <AppDateTitle style={styles.date} date={post.date} />
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>Editing post</Text>
          <TextInput
            style={styles.textInput}
            value={title}
            placeholder="Enter post title..."
            placeholderTextColor={THEME.MAIN_COLOR}
            onChangeText={setTitle}
            autoCorrect={false}
          />
          <TextInput
            style={styles.textInput}
            value={text}
            placeholder="Enter post text..."
            placeholderTextColor={THEME.MAIN_COLOR}
            onChangeText={setText}
            autoCorrect={false}
            multiline
          />
          {img ? (
            <Image
              style={{ width: "100%", height: 400 }}
              source={{ uri: img }}
            />
          ) : null}
          <PhotoPicker onPick={getPhoto} />
          <View style={styles.buttons}>
            <AppButton
              title="Cancel"
              color="#0000ff"
              onClick={backToPost}
              style={styles.button}
            />
            <AppButton
              title="Update post"
              color={THEME.EDIT_COLOR}
              onClick={updatePostHandler}
              style={styles.button}
              disabled={checkPostValues()}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

EditScreen.navigationOptions = ({ route }) => {
  const post = route.params.post;
  return {
    headerTitle: post?.title ?? 'Editing post',
  };
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fafafa",
  },
  wrapper: {
    padding: 20,
  },
  textInput: {
    padding: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: THEME.EDIT_COLOR,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 30,
  },
  title: {
    fontFamily: "balsamiqSans_Italic",
    fontSize: 30,
    textAlign: "center",
  },
  button: {
    width: "35%",
  },
  date: {
    alignItems: "center",
    backgroundColor: "rgba(11, 51, 205, 0.7)",
    paddingVertical: 10,
  },
});
