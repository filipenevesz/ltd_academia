import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeAdmin from "../screens/(auth)/(admin)/home"
import CreateWorkout from "../screens/(auth)/(admin)/createworking";
import AddUser from "../screens/(auth)/(admin)/alunos"
import FichaAvaliacao from "../screens/(auth)/(admin)/avaliation";
import CadastroAluno from "../screens/(auth)/(admin)/createstudent";

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
                name="Alunos"
                component={AddUser}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Criar treino"
                component={CreateWorkout}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="barbell" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Ficha"
                component={FichaAvaliacao}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="document-text" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Cadastro aluno"
                component={CadastroAluno}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person-add" color={color} size={size} />
                    ),
                }}
            />
           
            
        </Tab.Navigator>
    )
}