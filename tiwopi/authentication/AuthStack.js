import { View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Register from "../screens/Register";
import RegisterImages from "../screens/RegisterImages";
import { FontAwesome } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  let routeName;

  return (
    <Stack.Navigator initialRouteName={routeName}>
      <Stack.Screen
        options={{ header: () => null }}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{ header: () => null }}
        name="Register"
        component={Register}
      />
      <Stack.Screen
        options={{ header: () => null }}
        name="RegisterImages"
        component={RegisterImages}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
