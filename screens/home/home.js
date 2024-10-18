import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './style.js'
import icon from './icones/icon.js'


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Início</Text>
        <TouchableOpacity><Image source={icon.notify}></Image></TouchableOpacity>

      </View>
      <View style={styles.redline} />

      <View style={styles.profileCard}>

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



