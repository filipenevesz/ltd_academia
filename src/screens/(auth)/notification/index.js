import { Text, View, ScrollView, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HomeScreen from '../home';
import  styles  from './styles';
import { Ionicons } from '@expo/vector-icons'
import React from 'react'

export default function Notifications() {
    const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content"/>
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack(HomeScreen)} style={styles.buttonBack}>
                <Ionicons name="arrow-back" size={30} color={"#fff"}/>
                <Text style={styles.textHeader}>Notificações</Text>
            </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <View style={styles.notificationArea}>
                <Text style={styles.notificationText}>Notificações recentes</Text>
            
                <View style={styles.notificationCard}>
                    <Text style={styles.notificationTextDate}>18 de Outubro, 22:19</Text>
                    <Text style={styles.notificationTextCard}>Pagamento recebido</Text>
                </View>
                <View style={styles.notificationCard}>
                    <Text style={styles.notificationTextDate}>16 de Outubro, 18:50</Text>
                    <Text style={styles.notificationTextCard}>Presença confirmada!</Text>
                </View>
                
                <Text style={styles.notificationText}>Notificações antigas</Text>
                <View style={styles.notificationCard}>
                    <Text style={styles.notificationTextDate}>15 de Setembro, 7:15</Text>
                    <Text style={styles.notificationTextCard}>Pagamento recebido</Text>
                </View>
                <View style={styles.notificationCard}>
                    <Text style={styles.notificationTextDate}>16 de Setembro, 8:20</Text>
                    <Text style={styles.notificationTextCard}>Presença confirmada!</Text>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  );
}

