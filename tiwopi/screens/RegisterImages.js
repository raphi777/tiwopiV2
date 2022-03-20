import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function RegisterImages({ route, navigation }) {
  let futureUser = route.params;
  console.log(futureUser);
  return (
    <View style={styles.container}>
      <Text>RegisterImages</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
