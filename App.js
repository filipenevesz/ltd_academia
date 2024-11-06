import * as React from "react";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, StatusBar, StyleSheet } from "react-native";

import AuthNavigation from "./src/navigation/AuthNavigation";
import AlunoNavigation from "./src/navigation/AlunoNavigation";


const Tab = createBottomTabNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

export default function App() {
  const [isSignedIn, setisSignedIn] = useState(true);
  // Tipo do Ususario : [0 = aluno; 1 = treinador; 2 = admin]
  const [isUserType, setisUserType] = useState(0)

  const screenOptions = {
    animationEnabled: false,
    headerShown: false,
    tabBarStyle: {
      position: 'absolute',
      backgroundColor: "#2B2B2B",
      height: 75,
      width: "100%",
      
      paddingBottom: 5,
      borderTopWidth: 0,  // Remove a borda superior da navbar
      elevation: 0, // Remove sombras em Android
      shadowOpacity: 0, // Remove sombras no iOS
    },
    tabBarLabelStyle: {
      fontWeight: "900",
      fontSize: 12,
      tabBarActiveTintColor: "#ED5359",
      tabBarInactiveTintColor: "white",
    },
    tabBarActiveTintColor: "#ED5359",
    tabBarInactiveTintColor: "white",
  };

  return (
    <View style={styles.appContainer}>
      <NavigationContainer theme={MyTheme} >
        {!isSignedIn ?
        (<AuthNavigation onLogin={() => setisSignedIn(true)} />) :
        (<AlunoNavigation isUserType={isUserType} />)
      }
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});
