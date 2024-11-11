import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, StatusBar, Text, Image } from 'react-native';
import Header from "../../../../components/header";
import ImageProfile from '../../../../assets/images/defalt_profile.png';
import Card from "../../../../components/card" // Ensure this path is correct and the component is exported properly
import styles from './styles';
import { get_user } from '../../../../services/AuthService';
import ProfileLabel from '../../../../components/profile_label';

export default function HomeAdmin() {
    // const [user, setUser] = useState(null); // Inicializa o estado do usuário
    // const [greeting, setGreeting] = useState('');
    // useEffect(() => {
    //     const fetchUser = async () => {
    //         try {
    //             const userData = await get_user(); // Aguarda a resolução da Promise
    //             console.log('==============================================');
    //             console.log(userData);

    //             setUser(userData); // Atualiza o estado com o usuário obtido
    //         } catch (error) {
    //             console.error('Erro ao obter usuário', error);
    //         }
    //     };
    //     fetchUser();
    // }, []);
    // useEffect(() => {
    //     const determineGreeting = () => {
    //         const currentHour = new Date().getHours();
    //         if (currentHour < 12) {
    //             return 'Bom dia!';
    //         } else if (currentHour < 18) {
    //             return 'Boa tarde!';
    //         } else {
    //             return 'Boa noite!';
    //         }
    //     };

    //     setGreeting(determineGreeting());
    // }, []);
    return (
        <View style={styles.container}>
            <Header title={"Home"} />
            <ProfileLabel/>
            <View>

            </View>
        </View>
    );
}

