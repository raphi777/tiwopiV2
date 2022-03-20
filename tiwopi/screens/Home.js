import { StyleSheet, View, Alert } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

import Swipeableimage from "../components/Swipeableimage";
import Swipes from "../components/Swipes";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const swipesRef = useRef(null);

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

  function handleLike() {
    console.log("like");
    nextUser();
  }

  function handlePass() {
    console.log("pass");
    nextUser();
  }

  function handleLikePress() {
    swipesRef.current.openLeft();
  }

  function handlePassPress() {
    swipesRef.current.openRight();
  }

  function nextUser() {
    const nextIndex = users.length - 2 === currentIndex ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
  }

  return (
    <View style={styles.container}>
      <View stlye={styles.swipes}>
        {users.length > 1 &&
          users.map(
            (u, i) =>
              currentIndex === i && (
                <Swipes
                  key={i}
                  ref={swipesRef}
                  users={users}
                  currentIndex={currentIndex}
                  handleLike={handleLike}
                  handlePass={handlePass}
                  handleLikePress={handleLikePress}
                  handlePassPress={handlePassPress}
                />
              )
          )}
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
