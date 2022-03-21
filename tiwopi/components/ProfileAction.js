import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const ProfileAction = ({ title, screen, navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(screen)}>
      <View style={styles.action}>
        <View style={styles.iconContainer}>
          {/* <FontAwesome name="image" size={27} color="#F06795" /> */}
          <Text style={styles.actionTitle}>{title}</Text>
        </View>
        <FontAwesome name="chevron-right" size={27} color="#F06795" />
      </View>
    </TouchableOpacity>
  );
};

export default ProfileAction;

const styles = StyleSheet.create({
  action: {
    flexDirection: "row",
    marginTop: 30,
    paddingHorizontal: 25,
  },
  iconContainer: {
    borderRadius: 6,
    flex: 1,
  },
  actionTitle: {
    marginLeft: 19,
    fontSize: 20,
  },
});
