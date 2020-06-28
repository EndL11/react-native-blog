import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

export const AppDateTitle = ({ style, date }) => {
  const createTimeText = () => {
    const newDate = new Date(date)
    newDate.setHours(newDate.getHours() + 3);
    const hours = newDate.getHours();
    const minutes = newDate.getMinutes();
    //  returning date
    return `${newDate.toDateString()} ${hours < 10 ? "0" + hours : hours}:${
      minutes < 10 ? "0" + minutes : minutes
    }`;
  };
  return (
    <View style={{ ...styles.wrap, ...style }}>
      <Text style={styles.text}>{createTimeText()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "balsamiqSans_BoldItalic",
    fontSize: 18,
    color: "#fff",
  },
  wrap: {
    borderTopColor: "rgb(131, 231, 211)",
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderBottomColor: "#fff",
  },
});
