import * as React from "react";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, StatusBar, StyleSheet } from "react-native";

// Importando as páginas para os tipos de usuários
import HomeAdmin from "./src/screens/(admin)/home";  // Tela do Admin
import HomeScreen from './src/screens/(auth)/(aluno)/home';  // Tela Home normal para aluno
import Financial from "./src/screens/(auth)/(aluno)/financial";
import Profile from "./src/screens/(auth)/(aluno)/profile";
import Training from "./src/screens/(auth)/(aluno)/workout";
import Login from "./src/screens/(public)/login";
import Notifications from "./src/screens/(auth)/(aluno)/notification";  // Exemplo de tela para todos
import HomeStack from './src/navigation/stack-navigation'; // Para usuário normal
import HomeStackAdmin from "./src/navigation/stack-navigation-admin"; // Para usuário admin
import AddUser from "./src/screens/(admin)/adduser";

const Tab = createBottomTabNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

export default function App() {
  const [isSignedIn, setisSignedIn] = useState(true);  // Controla o login
  const [isUserType, setIsUserType] = useState(2);  // 0 = Home normal, 1 = Treinador, 2 = Admin

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
      <NavigationContainer theme={MyTheme}>
        <StatusBar
          animated={true}
          translucent
          backgroundColor="transparent"
          barStyle="light-content"
        />

        {!isSignedIn ? (
          <Login login={() => setisSignedIn(true)} />
        ) : (
          <Tab.Navigator screenOptions={screenOptions}>
            {/* Menu - Exibe diferentes HomeStacks baseado no tipo de usuário */}
            <Tab.Screen
              name="Menu"
              component={isUserType === 0 ? HomeStack : isUserType === 2 ? HomeStackAdmin : HomeScreen}  // Dependendo do tipo de usuário, exibe o HomeStack correto
              options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="home" color={color} size={size} />
                ),
              }}
            />

            {/* Tela de Treinamento */}
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

            {/* Tela Financeiro */}
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

            {/* Tela de Perfil */}
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

            {/* Adiciona um novo Tab.Screen somente para Administradores */}
            {isUserType === 2 && (
              <Tab.Screen
                name="CadUsuário"
                component={AddUser}  // Nova tela exclusiva para Administradores
                options={{
                  headerShown: false,
                  tabBarIcon: ({ color, size }) => (
                    <Ionicons name="person-add" color={color} size={size} />
                  ),
                }}
              />
            )}

          </Tab.Navigator>
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
