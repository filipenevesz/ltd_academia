import React from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';


import { styles } from './style.js'



export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Início</Text>
        {/* <TouchableOpacity><Image source={require('../../assets/images/icon_bell.png')}></Image></TouchableOpacity> */}

      </View>
      <Text style={styles.redline} ></Text>

      <View style={styles.profileCard}>
        {/* <Image source={require('../../assets/images/ex_card.png')}></Image> */}
        <Text style={styles.texto}>Bom dia! </Text>
        <Text style={styles.textAbaixo}>Francisco Pinto</Text>

      </View>
      

  
        <View style={styles.card}>
          {/* <ImageBackground style={styles.imagem} source={require('../../assets/images/ex_card.png')}></ImageBackground> */}
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
}



