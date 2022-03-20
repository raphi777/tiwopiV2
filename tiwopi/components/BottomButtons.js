import { View, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

export default function BottomButtons({ handleLikePress, handlePassPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handlePassPress}>
        <FontAwesome name="times" size={27} color="#F06795" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <FontAwesome name="play" size={27} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleLikePress}>
        <FontAwesome name="heart" size={27} color="#64EDCC" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 75,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  button: {
    margin: 30,
    width: 50,
    height: 50,
    backgroundColor: "white",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6.46,
    elevation: 9,
  },
});
