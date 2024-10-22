import { Text, View, ScrollView, TouchableOpacity, Image, SafeAreaView, StatusBar } from 'react-native';
import React from 'react'
import Frame from '../profile/assets_profile/Frame.png';
import SwitchCamera from './assets_profile/SwitchCamera.png';
import User from './assets_profile/User.png';
import { styles } from './styles_profile'
import { Ionicons } from "@expo/vector-icons";

export function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Perfil</Text>
        <View style={styles.redLine}/>
      </View>

      <ScrollView style={styles.container}>
        <View style={styles.profile}>
          <View style={styles.profileContainer}>
            <View style={styles.profilePhoto}>
              <Image style={styles.userIcon} source={User}/>
            </View>
            <TouchableOpacity style={styles.profilePhotoChange}>
              <Image style={styles.cameraIcon} source={SwitchCamera}/>
            </TouchableOpacity>
          </View>
          <Text style={styles.profileTextName}>Francisco Pinto</Text>
          <View style={styles.addressContainer}>
            <Ionicons name="call-outline"/>
            <Text>(99) 9 9999-9999</Text>
          </View>
          <View style={styles.addressContainer}>
            <Image source={Frame} style={styles.locationIcon}/>
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
