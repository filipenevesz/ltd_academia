import * as React from 'react';
import { View, StatusBar, StyleSheet, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../../components/header';
import Card from '../../../../components/card';
import ImageProfile from '../../../../assets/images/defalt_profile.png';

import styles from './styles'

export default function HomeAdmin() {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Header title="Início" />            
            <View style={styles.profile}>
                <Image style={styles.perfil} source={ImageProfile} />
                <Text style={styles.nome}>
                    Bom dia!{'\n'}
                    Francisco Pinto
                </Text>
            </View>
            <Card
                title={"Ver alunos"}
                description={"Observar e gerenciar os alunos"}
                onPress={() => alert("Implementar Isso")}
                />
            <Card
                title={"Ver treinadores"}
                description={"Observar e gerenciar os treinadores"}
                onPress={() => alert("Implementar Isso")}
                />
            <Card
                title={"Ver turmas"}
                description={"Observar e gerenciar as turmas"}
                onPress={() => alert("Implementar Isso")}
                />
            <View>

            </View>
        </View>
    );
}

