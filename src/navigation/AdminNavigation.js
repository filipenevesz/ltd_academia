import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeAdmin from "../screens/(auth)/(admin)/home"
import CreateWorkout from "../screens/(auth)/(admin)/createworking";
import FichaAvaliacao from "../screens/(auth)/(admin)/avaliation";
import CadastroAluno from "../screens/(auth)/(admin)/createstudent";
import AlunoScreen from "../screens/(auth)/(admin)/alunos"
import FuncionarioScreen from "../screens/(auth)/(admin)/funcionarios";
import Config from "../screens/(auth)/(admin)/config"

const Tab = createBottomTabNavigator();

export default function AdminNavigation({ onLogout }) {
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
                component={AlunoScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Funcionarios"
                component={FuncionarioScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person-outline" color={color} size={size} />
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