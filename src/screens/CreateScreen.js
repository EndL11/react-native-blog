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
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { AppButton } from "../components/AppButton";
import { THEME } from "../theme";
import { createPost } from "../store/actions/post";
import { PhotoPicker } from "../components/PhotoPicker";

export const CreateScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);

  const checkPostValues = () => {
    return !text?.trim() || !title?.trim() || !img?.trim();
  };

  const resetState = () => {
    setText("");
    setTitle("");
    setImg(null);
  };

  const cancelHandler = () => {
    resetState();
    navigation.navigate("Main");
  };

  const createPostHandler = () => {
    if (checkPostValues()) {
      Alert.alert("Error", "You must fill all fields!");
      return;
    }
    const post = {
      text,
      title,
      img,
      date: new Date().toJSON(),
      booked: false,
    };
    dispatch(createPost(post));
    resetState();
    navigation.navigate("Main");
  };

  const getPhoto = (uri) => {
    setImg(uri);
  };

  return (
    <ScrollView style={styles.container}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>Create new post</Text>
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
              onClick={cancelHandler}
              style={styles.button}
            />
            <AppButton
              title="Add post"
              color={THEME.EDIT_COLOR}
              onClick={createPostHandler}
              style={styles.button}
              disabled={checkPostValues()}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

CreateScreen.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: "Create new post",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item
          title="Menu"
          iconName="md-menu"
          onPress={() => navigation.toggleDrawer()}
        />
      </HeaderButtons>
    ),
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
});
