import React from "react";
import { View, Text, Button,StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { removeToken } from "../../../../services/AuthService"
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../../../../services/api";
import { Card } from "react-native-paper"



export default function Config({onLogout}) {
    const navigation = useNavigation();

    const handleLogout = async () => {
        try {
            await removeToken();
            await AsyncStorage.clear();
            onLogout();
            // navigation.reset({
            //     index: 0,
            //     routes: [{ name: 'Login' }],
            //   });
        } catch (error) {
            console.error("Error logging out: ", error);
        }
    };

    return (
        <View style={styles.containner}>
            <Card style={styles.card}>
                <Card.Title title="Configurações" />
                <Card.Content>
                    <Button title="Sair" onPress={handleLogout} />
                </Card.Content>
            </Card>
        </View>
    );

}

const styles = StyleSheet.create({
    containner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    card:{
        width: '90%',
        margin: 10
    }
})