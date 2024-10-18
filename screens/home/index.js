import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './style.js'



export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Início</Text>
        <TouchableOpacity><Image source={require('../../assets/Frame.png')}></Image></TouchableOpacity>

      </View>
      <View style={styles.redline} />

      <View style={styles.profileCard}>
        <Image source={require('../../assets/Group 5.png')}></Image>
        <Text style={styles.texto}>Bom dia! </Text>
        <Text style={styles.textAbaixo}>Francisco Pinto</Text>

      </View>


      <View style={styles.cardgroup}>
        <View style={styles.card}>
          <Image
            style={styles.cardImage}
          />

          <Text style={styles.cardTitle}>Quinta-feira</Text>
          <Text style={styles.cardSubtitle}>Dia de Treino!</Text>


        </View>



      </View>


    </View>
  );
}



