import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../screens/Login";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  let routeName;

  return (
    <Stack.Navigator initialRouteName={routeName}>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={Login}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
