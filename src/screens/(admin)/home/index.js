import * as React from 'react';
import { View, StatusBar, StyleSheet, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/header';
import ImageProfile from '../../../assets/images/defalt_profile.png';

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
        </View>
    );
}

