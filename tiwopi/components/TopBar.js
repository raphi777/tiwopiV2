import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

export default function TopBar() {
  return (
    <View style={styles.container}>
      <FontAwesome5 name="fire" size={27} color="#F06795" />
      <FontAwesome name="comments" size={27} color="#5c5c5c" />
      <FontAwesome name="user" size={27} color="#5c5c5c" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 40,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.12,
    shadowRadius: 5.46,
    elevation: 9,
  },
});
