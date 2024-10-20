import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';

import { styles } from './style.js'

export const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Início</Text>
        <TouchableOpacity><Image source={require('../../assets/Frame.png')}></Image></TouchableOpacity>

      </View>
      <Text style={styles.redline} ></Text>

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


    </View>
  );
};


