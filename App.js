import * as React from "react";
import { NavigationContainer, DefaultTheme, StackRouter, useNavigation } from '@react-navigation/native';
import { useState, useEffect } from "react";
import { View, StatusBar, StyleSheet, Alert } from "react-native";

import AuthNavigation from "./src/navigation/AuthNavigation";
import AlunoNavigation from "./src/navigation/AlunoNavigation";
import AdminNavigation from "./src/navigation/AdminNavigation";
import api from "./src/services/api";
import { saveUser, removeToken, get_user } from "./src/services/AuthService";
import AsyncStorage from "@react-native-async-storage/async-storage";


const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

export default function App() {
  const [isUserType, setUserType] = useState("desconhecido");
  const [isSignedIn, setSignedIn] = useState(false);

  useEffect(() => {
    const fetchUserType = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        if (token) {
          const response = await api.get("/auth/me");
          console.log(response.data);
          saveUser(response.data);
          const userType = response.data.role;
          setUserType(userType);
          setSignedIn(true);
        }
      } catch (error) {
        console.log(error);
        setSignedIn(true);
        setUserType("Desconhecido");
      }
    };

    fetchUserType();
    console.log("Tipo de Usuário: ", isUserType);
  }, [isUserType]);

  handlerLogin = () => {
    user = get_user();
    console.log(user);
    setSignedIn(true);
    fetchUserType();
    setUserType(user.role);
  };

  handlerLogout = async () => {
    try {
      await AsyncStorage.clear();
      setSignedIn(false);
    }
    catch (error) {
      console.error("Erro ao sair: ", error);
    }
  }

  // handleUserError = () => {
  //   Alert.alert(
  //     "Erro",
  //     "Usuário não identificado",
  //     [
  //       {
  //         text: "Sair",
  //         onPress: () => {
  //           removeToken();
  //           setSignedIn(false);
  //         },
  //       },
  //     ],
  //     { cancelable: false }
  //   );
  // };


  return (
    <View style={styles.appContainer}>
      <NavigationContainer theme={MyTheme}>
        {!isSignedIn ? (
          <AuthNavigation onLogin={() => { setSignedIn(true) }} />
        ) : (
          <>
            {isUserType === 'STUDENT' ? (
              <AlunoNavigation onLogout={handlerLogout} />
            ) : isUserType === 'TRAINER' ? (
              <AlunoNavigation />
            ) : isUserType === 'ADMIN' ? (
              <AdminNavigation onLogout={handlerLogout} />
            )
              : (<></>)
            }
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
