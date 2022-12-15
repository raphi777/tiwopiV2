import React, { useContext } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import ProfileAction from "../components/ProfileAction";
import ProfileActionName from "./ProfileActionName";
import { AuthContext } from "../authentication/AuthProvider";
import ProfileActionAudioRecordings from "./ProfileActionAudioRecordings";

const Profile = ({ navigation }) => {
  const { user } = useContext(AuthContext);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.textEmail}>Email: {user?.email}</Text>
      <ProfileAction
        title="Name"
        screen={ProfileActionName}
        navigation={navigation}
      />
      <ProfileAction title="Pictures" />
      <ProfileAction
        title="Audio Recordings"
        screen={ProfileActionAudioRecordings}
        navigation={navigation}
      />
      <ProfileAction title="Interests" />
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textEmail: {
    paddingTop: 20,
    marginLeft: 41,
    fontSize: 20,
  },
});
