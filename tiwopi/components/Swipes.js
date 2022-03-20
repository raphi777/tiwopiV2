import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { RectButton } from "react-native-gesture-handler";
import Swipeableimage from "./Swipeableimage";

function Swipes({
  users,
  currentIndex,
  handleLike,
  handlePass,
  swipesRef,
  handleLikePress,
  handlePassPress,
}) {
  const [willLike, setWillLike] = useState(false);
  const [willPass, setWillPass] = useState(false);
  const renderLeftActions = () => {
    return (
      <RectButton style={styles.container}>
        <Swipeableimage user={users[currentIndex + 1]}></Swipeableimage>
      </RectButton>
    );
  };
  const renderRightActions = () => {
    return (
      <RectButton style={styles.container}>
        <Swipeableimage user={users[currentIndex + 1]}></Swipeableimage>
      </RectButton>
    );
  };

  return (
    <GestureHandlerRootView>
      <Swipeable
      ref={swipesRef}
        friction={2}
        leftThreshold={40}
        rightThreshold={40}
        renderLeftActions={renderLeftActions}
        renderRightActions={renderRightActions}
        onSwipeableLeftOpen={() => {
          setWillLike(false);
          handleLike();
        }}
        onSwipeableRightOpen={() => {
          setWillPass(false);
          handlePass();
        }}
        onSwipeableLeftWillOpen={() => setWillLike(true)}
        onSwipeableRightWillOpen={() => setWillPass(true)}
      >
        <Swipeableimage
          user={users[currentIndex]}
          willLike={willLike}
          willPass={willPass}
          handleLikePress={handleLikePress}
          handlePassPress={handlePassPress}
        />
      </Swipeable>
    </GestureHandlerRootView>
  );
}

export default React.forwardRef((props, ref) => <Swipes swipesRef={ref} {...props}/>)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
