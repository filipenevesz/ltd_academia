import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { get_user } from "../../services/AuthService";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {Avatar} from "react-native-paper";



export default function ProfileLabel() {
    const [user, setUser] = useState(null); // Inicializa o estado do usuário
    const [greeting, setGreeting] = useState('');
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userData = await get_user(); // Aguarda a resolução da Promise
                console.log('==============================================');
                console.log(userData);

                setUser(userData); // Atualiza o estado com o usuário obtido
            } catch (error) {
                console.error('Erro ao obter usuário', error);
            }
        };
        fetchUser();
    }, []);
    useEffect(() => {
        const determineGreeting = () => {
            const currentHour = new Date().getHours();
            if (currentHour < 12) {
                return 'Bom dia!';
            } else if (currentHour < 18) {
                return 'Boa tarde!';
            } else {
                return 'Boa noite!';
            }
        };

        setGreeting(determineGreeting());
    }, []);

    return(
        <View style={styles.container}>
        <StatusBar barStyle="dark-content" /><View style={styles.profile}>
                {/* <Image style={styles.perfil} source={{ uri: user.imageUrl }} /> */}
                <Avatar.Image size={50} source={{ uri: user?.imageUrl }} style={styles.perfil}/>
                <Text style={styles.nome}>
                    {greeting}{'\n'}
                    {user ? `${user.name.toUpperCase()} ${user.lastName.toUpperCase()}` : 'Carregando...'}

                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    profile: {
        flexDirection: 'row', // Coloca o texto e imagem lado a lado
        alignItems: 'center', // Centraliza verticalmente
        backgroundColor: '#525153',
        padding: 5,
        paddingBottom: 12,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    perfil: {
        width: 50,   // Largura da imagem
        height: 50,  // Altura da imagem
        borderRadius: 25, // Faz a imagem ser circular, se for quadrada
        marginRight: 10, // Espaço entre imagem e texto
    },
    nome: {
        fontSize:18,
        fontWeight:'bold',
        color:'white',
    },
});