import { Text, View, ScrollView, TouchableOpacity, Image, SafeAreaView, StatusBar } from 'react-native';
import styles from './styles'
import { Ionicons } from "@expo/vector-icons";
import React from 'react'
import Button from '../../../../components/button';
import Header from '../../../../components/header';

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

        <View style={styles.tabContainer}>
          <TouchableOpacity style={styles.tabItem}>
            <Ionicons name="person" size={30} color="#ED5359" />
            <Text style={styles.tabText}>Informações</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <Ionicons name="document-text" size={30} color="gray" />
            <Text style={styles.tabText}>Ficha de avaliação</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem}>
            <Ionicons name="wallet" size={30} color="gray" />
            <Text style={styles.tabText}>Financeiro</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Informações</Text>
          <View style={styles.infoCard}>
            <View style={styles.infoRow}>
              <Text style={styles.label}>Nome completo</Text>
              <Text style={styles.value}>Francisco Pinto</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.label}>Data de nascimento</Text>
              <Text style={styles.value}>24/06/1999</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.label}>Sexo</Text>
              <Text style={styles.value}>Masculino</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.label}>E-mail</Text>
              <Text style={styles.value}>franciscopinto@gmail.com</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.label}>Celular</Text>
              <Text style={styles.value}>(99) 9 9999-9999</Text>
            </View>
          </View>
        </View>

        <View style={styles.buttons}>
          <Button
            title='Editar Perfil'
            onPress = {()=>alert("CRIAR FUNCIONALIDADE DE VER PERFIL")}
          />
          <Button
            title='Ver Ficha'
            onPress = {()=>alert("CRIAR FUNCIONALIDADE DE VER FICHA")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}