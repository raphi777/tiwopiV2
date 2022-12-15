import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";

import Home from "../screens/Home";
import Settings from "../screens/Settings";
import Profile from "../screens/Profile";
import ProfileActionName from "../screens/ProfileActionName";
import ProfileActionAudioRecordings from "../screens/ProfileActionAudioRecordings";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const ProfileStack = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Profile"
      component={Profile}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ProfileActionName"
      component={ProfileActionName}
      options={{
        headerTitle: "Edit Name",
        headerBackTitleVisible: false,
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#fff",
          shadowColor: "#fff",
          elevation: 0,
        },
      }}
    />
    <Stack.Screen
      name="ProfileActionAudioRecordings"
      component={ProfileActionAudioRecordings}
      options={{
        headerTitle: "Your Audio Recordings",
        headerBackTitleVisible: false,
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#fff",
          shadowColor: "#fff",
          elevation: 0,
        },
      }}
    />
  </Stack.Navigator>
);

const AppStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === "Home") {
            iconName = focused ? "home" : "home";
          } else if (rn === "Settings") {
            iconName = focused ? "gear" : "gear";
          } else if (rn === "Profile") {
            iconName = focused ? "user" : "user";
          }

          return <FontAwesome name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#F06795",
        inactiveTintColor: "grey",
        labelStyle: { paddingBottom: 4, fontSize: 10 },
        style: { padding: 10, height: 70 },
      }}
    >
      <Tab.Screen name="Profile" component={ProfileStack} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default AppStack;
