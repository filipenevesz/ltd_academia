import { Text, View, ScrollView, TouchableOpacity, Image, SafeAreaView, StatusBar } from 'react-native';
import styles from './styles'
import { Ionicons } from "@expo/vector-icons";
import React from 'react'
import Button from '../../../components/button';
import Header from '../../../components/header';

export default function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        title='Perfil'
      />

      <ScrollView style={styles.container}>
        <View style={styles.profile}>
          <View style={styles.profileContainer}>
            <View style={styles.profilePhoto}>
              <Ionicons name="person-circle" size={120} color={"#ffffff"} />
            </View>
            <TouchableOpacity style={styles.profilePhotoChange}>
              <Ionicons name="camera-reverse" size={20} color={"#ffffff"} />
            </TouchableOpacity>
          </View>
          <Text style={styles.profileTextName}>Francisco Pinto</Text>
          <View style={styles.addressContainer}>
            <Ionicons name="call" size={15} color={"#2B2B2B"} />
            <Text> (99) 9 9999-9999</Text>
          </View>
          <View style={styles.addressContainer}>
            <Ionicons name="location" size={15} color={"#ED5359"} />
            <Text style={styles.addressText}>Rua Argentina, 98, Centro</Text>
          </View>
        </View>


      </ScrollView>
    </SafeAreaView>
  );
}
