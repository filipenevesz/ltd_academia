import { Text, View, ScrollView, TouchableOpacity, Image, SafeAreaView, StatusBar } from 'react-native';
import { styles } from './styles_profile'
import { Ionicons } from "@expo/vector-icons";
import React from 'react'

export function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Perfil</Text>
        {/* <View style={styles.redLine}/> */}
      </View>

      <ScrollView style={styles.container}>
      <View style={styles.profile}>
          <View style={styles.profileContainer}>
            <View style={styles.profilePhoto}>
              <Ionicons name="person-circle" size={120} color={"#ffffff"}/>
            </View>
            <TouchableOpacity style={styles.profilePhotoChange}>
              <Ionicons name="camera-reverse" size={20} color={"#ffffff"}/>
            </TouchableOpacity>
        </View>
        <Text style={styles.profileTextName}>Francisco Pinto</Text>
          <View style={styles.addressContainer}>
            <Ionicons name="call" size={15} color={"#2B2B2B"}/>
        <Text> (99) 9 9999-9999</Text>
          </View>
          <View style={styles.addressContainer}>
            <Ionicons name="location" size={15} color={"#ED5359"}/>
            <Text style={styles.addressText}>Rua Argentina, 98, Centro</Text>
          </View>
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
      </ScrollView>
    </SafeAreaView>
  );
}
