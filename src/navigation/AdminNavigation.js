import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeAdmin from "../screens/(auth)/(admin)/home"
import AddUser from "../screens/(auth)/(admin)/adduser";
import CreateCoach from "../screens/(auth)/(admin)/createcoach";

const Tab = createBottomTabNavigator();

export default function AdminNavigation() {
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
                component={HomeAdmin}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Adicionar usuário"
                component={AddUser}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Cadastrar treinador"
                component={CreateCoach}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" color={color} size={size} />
                    ),
                }}
            />
            
        </Tab.Navigator>
    )
}