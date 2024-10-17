import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react'


export function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Perfil</Text>
      </View>

      <View style={styles.profile}>
        <View style={styles.profilePhoto}/>
        <Text style={styles.profileTextName}>Francisco Pinto</Text>
        <Text>(99) 9 9999-9999</Text>
        <Text>Rua Argentina, 98, Centro</Text>
      </View>

      <View>
        <Text style={styles.textInfo}>Minhas informações:</Text>
        <ScrollView style={styles.card}>
          <Text style={styles.textCard}>Email:</Text>
          <Text style={styles.textCard}>Endereço:</Text>
          <Text style={styles.textCard}>Matrícula:</Text>
          <Text style={styles.textCard}>Peso:</Text>
          <Text style={styles.textCard}>Altura:</Text>
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
    profile: {
      alignItems: "center",
      justifyContent: "center",
      marginTop: 20,
    },
    profileTextName: {
      padding: 3,
      fontWeight: "700",
      fontSize: 23,
    },
    profilePhoto: { 
      margin: 30,
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
    textInfo: {
      fontSize: 20,
      paddingTop: 50,
      paddingLeft: 30,
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
      fontWeight: '400',
      padding: 2,
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
    }
});
