import * as React from "react";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, StatusBar, StyleSheet } from "react-native";

import AuthNavigation from "./src/navigation/AuthNavigation";
import AlunoNavigation from "./src/navigation/AlunoNavigation";
import AdminNavigation from "./src/navigation/AdminNavigation";
import api from "./src/services/api";
import { save_user } from "./src/services/AuthService";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Tab = createBottomTabNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

export default function App() {

  // Tipo do Ususario : [0 = aluno; 1 = treinador; 2 = admin]
  const [isUserType, setUserType] = useState(null);
  const [isSignedIn, setSignedIn] = useState(false);
  useEffect(() => {
    const fetchUserType = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        if (token) {
          const response = await api.get("/auth/me");
          console.log(response.data);
          save_user(response.data);
          const userType = response.data.role;
          setUserType(userType);
          setSignedIn(true);
        }
      } catch (error) {
        console.log(error);
        setSignedIn(false);
      }
    };

    fetchUserType();
  }, []);

  
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
      {!isSignedIn ? (
        <AuthNavigation onLogin={() => setSignedIn(true)} />
      ) : (
        <>
          {isUserType === "STUDENT" ? (
            <AlunoNavigation />
          ) : isUserType == "TRAINER" ? (
            <AlunoNavigation />
          ) : isUserType == "ADMIN" ? (
            <AdminNavigation />
          ) : null}
        </>
      )}
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
