import { Text, View, ScrollView, TouchableOpacity, SafeAreaView, StatusBar, Alert, Image  } from 'react-native';
import { styles } from './styles_profile'
import gaybriel2 from './assets_profile/gaybriel2.png';
import { Ionicons } from "@expo/vector-icons";
import React from 'react'

export function Profile() {
  const ViewPhotoProfile = () => {
    Alert.alert("Ver foto do perfil");
  };

  const ChangePhotoProfile = () => {
    Alert.alert("Mudar foto do perfil");
  };

  const EditInfos = () => {
    Alert.alert("Editar suas informações");
  };
  
  const ViewInfos = () => {
    Alert.alert("Ver sua ficha");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Perfil</Text>
      </View>

      <ScrollView style={styles.container}>
      <View style={styles.profile}>
          <View style={styles.profileContainer}>
            <TouchableOpacity 
              style={styles.profilePhoto}
              onPress={ViewPhotoProfile}
              accessibilityLabel={"Ver sua foto de perfil"}
            >
              <Image style={styles.imageProfilePhoto} source={gaybriel2}/>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.profilePhotoChange}
              onPress={ChangePhotoProfile}
              accessibilityLabel={"Mudar sua foto de perfil"}  
            >
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
        <TouchableOpacity 
          style={styles.buttonStyle}
          onPress={EditInfos}
          accessibilityLabel={"Editar suas informações"}
        >
          <Text style={styles.buttonText} >Editar perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.buttonStyle}
          onPress={ViewInfos}
          accessibilityLabel={"Ver suas informações"}>
          <Text style={styles.buttonText}>Visualizar ficha</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}
