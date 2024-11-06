import * as React from "react";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, StatusBar, StyleSheet } from "react-native";

// pages
import HomeAdmin from "./src/screens/(admin)/home"
import HomeScreen from "./src/screens/(auth)/home"
import Financial from "./src/screens/(auth)/financial";
import Profile from "./src/screens/(auth)/profile";
import Training from "./src/screens/(auth)/workout";
import Notifications from "./src/screens/(auth)/notification";
import Login from "./src/screens/(public)/login";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
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

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',  // Define o fundo transparente
  },
};

export default function App() {
  const [isSignedIn, setisSignedIn] = useState(false);
  // Tipo do Ususario : [0 = aluno; 1 = treinador; 2 = admin]
  const [isUserType, setisUserType] = useState(0)

  const screenOptions = {

    animationEnabled: false,
    headerShown: false,
    tabBarStyle: {
      position: 'absolute',
      backgroundColor: "#2B2B2B",
      height: 100,
      width: "90%",
      borderRadius: 10,
      marginBottom: 10,
      marginLeft: "5%",
      paddingBottom: 15,
      borderTopWidth: 0,  // Remove a borda superior da navbar
      elevation: 0, // Remove sombras em Android
      shadowOpacity: 0, // Remove sombras no iOS
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

    <View style={styles.appContainer}>
      <NavigationContainer theme={MyTheme} >

        <StatusBar
          animated={true}
          translucent
          backgroundColor="transparent"
          barStyle="light-content"
        />

        {!isSignedIn ? (
          <Login login={() => setisSignedIn(true)} />
        ) : (

          <Tab.Navigator screenOptions={screenOptions}  >
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
        )

        }


      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: 'transparent', // Define como transparente o container da aplicação
  },
})
