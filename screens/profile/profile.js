import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react'
import {StatusBar} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Perfil</Text>
        <View style={styles.redLine}/>
      </View>

      <View style={styles.profile}>
        <View style={styles.containerProfile}>
          <View style={styles.profilePhoto}/>
          <TouchableOpacity style={styles.profilePhotoChange}/>
        </View>
        <Text style={styles.profileTextName}>Francisco Pinto</Text>
        <Text>(99) 9 9999-9999</Text>
        <Text>Rua Argentina, 98, Centro</Text>
      </View>

      <View>
        <Text style={styles.textInfo}>Minhas informações:</Text>
        <ScrollView style={styles.card}>
          <Text style={styles.textCard}>
            Email: <Text style={styles.textCardInfo}>daviniccacio@gmail.com</Text>
          </Text>
          <Text style={styles.textCard}>
            Endereço: <Text style={styles.textCardInfo}>Rua Argentina, 98, Centro</Text>
          </Text>
          <Text style={styles.textCard}>
            Matrícula: <Text style={styles.textCardInfo}>0000</Text>
          </Text>
          <Text style={styles.textCard}>
            Peso: <Text style={styles.textCardInfo}>80Kg</Text>
          </Text>
          <Text style={styles.textCard}>
            Altura: <Text style={styles.textCardInfo}>180cm</Text>
          </Text>
        </ScrollView>
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.buttonText} >Editar perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Visualizar ficha</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F3F3F3",
    },
    header: {
        backgroundColor: "#2B2B2B",
    },
    textHeader: {
        color: "#FFFFFF",
        padding: 20,
        alignSelf: "flex-start",
        fontSize: 30,
    },
    redLine: {
      backgroundColor: '#ED5359',
      width: '100%',
      height: 2,
    },
    containerProfile: {
      position: 'relative',
    },
    profile: {
      alignItems: "center",
      justifyContent: "center",
      marginTop: 20,
    },
    profilePhoto: { 
      margin: 5,
      alignItems: 'center',
      width: 100,
      height: 100,
      borderRadius: 50,
      backgroundColor: 'gray',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 4,
    },
    profilePhotoChange: { 
      margin: 5,
      alignItems: 'center',
      right: 0,
      bottom: 0,
      position: 'absolute',
      width: 30,
      height: 30,
      borderRadius: 50,
      backgroundColor: 'red',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 4,
    },
    profileTextName: {
      padding: 3,
      fontWeight: "700",
      fontSize: 23,
    },
    textInfo: {
      fontSize: 20,
      paddingTop: 50,
      paddingLeft: 30,
      fontWeight: '700',
    },
    card: {
      padding: 10,
      paddingBottom: 120,
      backgroundColor: "#fff",
      marginHorizontal: 30,
      borderRadius: 10,
      overflow: "hidden",
      shadowColor: '#000',
      shadowOffset: { width: 1, height: 1 },
      shadowOpacity: 0.5,
      shadowRadius: 4,
    },
    textCard: {
      fontSize: 17,
      fontWeight: '700',
      padding: 2,
    },
    textCardInfo: {
      fontWeight: '400',
      fontSize: 17,
    },
    buttons: {
      flexDirection: "row-reverse",
      marginHorizontal: 27,
    },
    buttonStyle: {
      flex: 1,
      width: "50%",
      margin: 10,
      marginHorizontal: 3,
      backgroundColor: "#ED5359",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
      padding: 10,
    },
    buttonText: {
      fontWeight: "bold",
      color: "white",
    },
});
