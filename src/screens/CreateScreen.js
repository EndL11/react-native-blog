import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  TextInput,
} from "react-native";
import { useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { AppButton } from "../components/AppButton";
import { THEME } from "../theme";
import { createPost } from "../store/actions/post";

export const CreateScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const img = "https://static.insider.com/image/5db2169f045a3125cb50e8d7.jpg";
  const createPostHandler = () => {
    const post = {
      text,
      title,
      img,
      date: new Date().toJSON(),
      booked: false,
    };
    dispatch(createPost(post));
    setText("");
    setTitle("");
    navigation.navigate("Main");
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
          />
          <TextInput
            style={styles.textInput}
            value={text}
            placeholder="Enter post text..."
            placeholderTextColor={THEME.MAIN_COLOR}
            onChangeText={setText}
            multiline
          />
          <Image
            style={{ width: "100%", height: 250, marginBottom: 10 }}
            source={{ uri: img }}
          />
          <View style={{alignItems: 'center'}}>
            <AppButton
              title="Add photo"
              color={THEME.MAIN_COLOR}
              style={{ width: "55%" }}
              onClick={() => {}}
            />
          </View>
          <View style={styles.buttons}>
            <AppButton
              title="Cancel"
              color="#0000ff"
              onClick={() => navigation.navigate("Main")}
              style={styles.button}
            />
            <AppButton
              title="Add post"
              color={THEME.EDIT_COLOR}
              onClick={createPostHandler}
              style={styles.button}
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
    fontFamily: "MarckScript",
    fontSize: 30,
    textAlign: "center",
  },
  button: {
    width: "35%",
  },
});
