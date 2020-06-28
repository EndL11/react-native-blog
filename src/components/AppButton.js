import * as React from "react";
import { View, Button } from "react-native";

export const AppButton = ({ style, onClick, title, color, disabled }) => {
  return (
    <View style={style}>
      <Button title={title} onPress={onClick} color={color} disabled={disabled} />
    </View>
  );
};
