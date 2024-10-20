import { StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import React from 'react'



export function Notifications() {
  return (
    
    <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content"/>
        <View style={styles.header}>
            <Text style={styles.textHeader}>Notificações</Text>
            <View style={styles.redLine}/>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#2B2B2B",
    },
    textHeader: {
        color: "#FFFFFF",
        padding: 20,
        alignSelf: "flex-start",
        fontSize: 30,
    },
    redLine: {
        backgroundColor: "#ED5359",
        width: "100%",
        height: 2,
    },
    notificationArea: {
        paddingHorizontal: 5,
        paddingTop: 10,
        flex: 1,
        backgroundColor: "#ffffff",
        alignItems: 'center',
    },
    notificationText:{
        margin: 35,
        fontSize: 20,
        marginTop: 25,  
    },
    notificationCard: {
        backgroundColor: '#ffffff',
        padding: 10,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 2,
        width: '80%', 
        height: 120, 
        justifyContent: 'flex-start', 
        alignItems: 'center', 
        marginBottom: 25,
      },
      notificationTextDate: {
        fontWeight: "light",
        fontSize: 18,
        color: "#81A0A0"
      },
      notificationTextCard: {
        padding: 15,
        fontSize: 20,
        fontWeight: '900',
      },
      
});

