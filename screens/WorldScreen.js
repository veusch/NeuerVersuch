import React from "react";
import { View, Text, Button, StyleSheet, AppRegistry } from "react-native";

const WorldScreen = ({ navigation }) => {
  return (
    <view styles={styles.container}>
      <text>World Screen</text>
      <Button title="Click here" onPress={() => alert("Button clicked")} />
    </view>
  );
};

export default WorldScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8fcbbc",
  },
});
