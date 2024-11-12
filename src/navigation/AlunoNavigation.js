import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Financial from "../screens/(auth)/(aluno)/financial";
import Profile from "../screens/(auth)/(aluno)/profile";
import Training from "../screens/(auth)/(aluno)/workout";
import HomeScreen from "../screens/(auth)/(aluno)/home";
import Config from "../screens/(auth)/(aluno)/config";

const Tab = createBottomTabNavigator();

export default function AlunoNavigation({ onLogout }) {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    position: "absolute",
                    backgroundColor: "#2B2B2B",
                    height: 80,
                    width: "100%",
                    paddingBottom: 10,
                    borderTopWidth: 0,  // Remove a borda superior da navbar
                    elevation: 0, // Remove sombras em Android
                    shadowOpacity: 0, // Remove sombras no iOS
                },
                tabBarLabelStyle: {
                    fontWeight: "900",
                    fontSize: 12,
                    tabBarActiveTintColor: "#ED5359",
                    tabBarInactiveTintColor: "#FFFFFF",
                },
                tabBarActiveTintColor: "#ED5359",
                tabBarInactiveTintColor: "#FFFFFF",
            }}
        >
            <Tab.Screen
                name="Menu"
                component={HomeScreen}
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

            <Tab.Screen
                name="Configurações"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="settings-sharp" color={color} size={size} />
                    ),
                }}
            >
                {(props) => <Config {...props} onLogout={onLogout} />}
            </Tab.Screen>
        </Tab.Navigator>
    )
}