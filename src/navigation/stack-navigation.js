import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/(auth)/home";
import Notifications from "../screens/(auth)/notification";

const Stack = createStackNavigator();

function HomeStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
            name="Notifications"
            component={Notifications}
            options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }

export default HomeStack;