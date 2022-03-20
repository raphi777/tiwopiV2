import { StyleSheet, View, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Swipeableimage from "../components/Swipeableimage";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  async function fetchUsers() {
    try {
      const { data } = await axios.get(
        "https://randomuser.me/api/?gender=female&results=50"
      );
      setUsers(data.results);
    } catch (error) {
      console.log(error);
      Alert.alert("Error getting users", "", [
        { text: "Retry", onPress: () => fetchUsers() },
      ]);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <View style={styles.container}>
      <View stlye={styles.swipes}>
        {users.length > 1 && <Swipeableimage user={users[currentIndex]} />}
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  swipes: {
    flex: 1,
    padding: 50,
    paddingTop: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
});
