import React, { useState } from "react";
import { Image, View, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { AppButton } from "./AppButton";

async function askForPermissions() {
  const { status } = await Permissions.askAsync(
    Permissions.CAMERA,
    Permissions.CAMERA_ROLL
  );
  if (status !== "granted") {
    Alert.alert("Error", "App must have access");
    return false;
  }
  return true;
}

export const PhotoPicker = ({ onPick, oldImage=null }) => {
  const [image, setImage] = useState(oldImage);

  const createPhoto = async () => {
    const hasPermission = await askForPermissions();

    if (hasPermission === false) {
      return;
    }

    const img = await ImagePicker.launchCameraAsync({
      quality: 0.7,
      allowsEditing: false,
      aspect: [16, 9],
    });
    setImage(img.uri);
    onPick(img.uri);
  };

  const choosePhoto = async () => {
    const hasPermission = await askForPermissions();

    if (hasPermission === false) {
      return;
    }

    const img = await ImagePicker.launchImageLibraryAsync({
      quality: 0.7,
      allowsMultipleSelection: true,
      allowsEditing: false,
      aspect: [16, 9],
    });
    
    setImage(img.uri);
    onPick(img.uri);
  }

  return (
    <View>
      {image && (
        <Image style={{ width: "100%", height: 400 }} source={{ uri: image }} />
      )}
      <AppButton
        style={{ marginTop: 10 }}
        title="Create photo"
        onClick={createPhoto}
      />
      <AppButton
        style={{ marginTop: 10 }}
        title="Choose photo"
        onClick={choosePhoto}
      />
    </View>
  );
};
