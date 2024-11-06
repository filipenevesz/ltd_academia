import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeAdmin from "../screens/(admin)/home";
import Notifications from "../screens/(auth)/(aluno)/notification";

const Stack = createStackNavigator();

function HomeStackAdmin() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeAdmin}
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

export default HomeStackAdmin;