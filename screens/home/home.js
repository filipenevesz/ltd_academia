import React from "react";

import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, ImageBackground,SafeAreaView,StatusBar } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Notifications } from "../notification/notification.js";
import { styles } from './style.js'


export const Home = () => {

  const navigation = useNavigation();

  return (

    <SafeAreaView style={styles.container}>
      <StatusBar  barStyle="light-content" backGroundColor={'#2b2b2b'}/>
      <ScrollView>
      <View style={styles.header}>
        <Text style={styles.headerText}>Início</Text>
        <TouchableOpacity onPress={() => navigation.navigate(Notifications)} >
          <Image source={require('../../assets/Frame.png')} />
        </TouchableOpacity>

      </View>
      

      <View style={styles.profileCard}>
        <Image source={require('../../assets/Group 5.png')}></Image>
        <Text style={styles.texto}>Bom dia! </Text>
        <Text style={styles.textAbaixo}>Francisco Pinto</Text>

      </View>



      <View style={styles.card}>
        <ImageBackground style={styles.imagem} source={require('../../assets/Group.png')}></ImageBackground>
        <Text style={styles.cardTitle}>Quinta-feira</Text>
        <Text style={styles.underline}></Text>
        <Text style={styles.cardSubtitle}>Dia de Treino!</Text>
        <View style={styles.cardInterno}>
          <Text style={styles.texCardInterno}>Categoria do Treino:</Text>
          <Text style={styles.underline}></Text>

        </View>
      </View>


    
     </ScrollView >
     </SafeAreaView >
  );

};


