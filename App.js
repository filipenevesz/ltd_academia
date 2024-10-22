import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "react-native";

// pages
import { Home } from "./screens/home/home";
import { Financial } from "./screens/financial/financial";
import { Profile } from "./screens/profile/profile";
import { Training } from "./screens/training/training";
import Login from "./screens/login-page/login";
import { Notifications } from "./screens/notification/notification";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  const [isSignedIn, setisSignedIn] = useState(false);

  const screenOptions = {
    tabBarStyle: {
      backgroundColor: "#2B2B2B",
      height: 100,
      width: "90%",
      borderRadius: 10,
      marginBottom: 10,
      marginLeft: "5%",
      paddingBottom: 15,
    },
    tabBarLabelStyle: {
      fontWeight: "900",
      fontSize: 15,
      tabBarActiveTintColor: "#ED5359",
      tabBarInactiveTintColor: "white",
    },
    tabBarActiveTintColor: "#ED5359",
    tabBarInactiveTintColor: "white",
  };

  return (
    <NavigationContainer>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />

      {!isSignedIn ? (
        <Login login={() => setisSignedIn(true)} />
      ) : (
        <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen
            name="Menu"
            component={HomeStack}
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Treino"
            component={Training}
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="barbell" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Financeiro"
            component={Financial}
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="cash" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Perfil"
            component={Profile}
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="person" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
}